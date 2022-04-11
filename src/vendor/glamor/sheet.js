/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents


*/

function last(arr) {
  return arr[arr.length -1]
}

function sheetForTag(tag) {
  for(let i = 0; i < document.styleSheets.length; i++) {
    if(document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i]
    }
  }
}

const isDev = (x => (x === 'development') || !x)(process.env.NODE_ENV)
const isTest = process.env.NODE_ENV === 'test'
const isBrowser = typeof document !== 'undefined' && !isTest

const oldIE = (() => {
  if(isBrowser) {
    let div = document.createElement('div')
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->'
    return div.getElementsByTagName('i').length === 1
  }
})()

function rootEl() {
  return document.head || document.getElementsByTagName('head')[0];
}

export class StyleSheet {
  constructor({
    speedy = !isDev && !isTest,
    maxLength = (isBrowser && oldIE) ? 4000 : 65000
  } = {}) {
    this.isSpeedy = speedy // the big drawback here is that the css won't be editable in devtools
    this.sheet = undefined
    this.tags = []
    this.nodes = []
    this.maxLength = maxLength
    this.ctr = 0
    this.root = rootEl();
  }
  inject() {
    if(this.injected) {
      throw new Error('already injected stylesheet!')
    }
    if(isBrowser) {
      // this section is just weird alchemy I found online off many sources
      this.tags[0] = this.makeStyleTag()
      this.nodes.push({tag: this.tags[0], nodes: []});
      // this weirdness brought to you by firefox
      this.sheet = sheetForTag(this.tags[0])
    }
    else {
      // server side 'polyfill'. just enough behavior to be useful.
      this.sheet  = {
        cssRules: [],
        insertRule: rule => {
          // enough 'spec compliance' to be able to extract the rules later
          // in other words, just the cssText field
          const serverRule = { cssText: rule }
          this.sheet.cssRules.push(serverRule)
          return {serverRule, appendRule: (newCss => serverRule.cssText += newCss)}
        }
      }
    }
    this.injected = true
  }
  speedy(bool) {
    if(this.ctr !== 0) {
      throw new Error(`cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})`)
    }
    this.isSpeedy = !!bool
  }
  _insert(rule) {
    // this weirdness for perf, and chrome's weird bug
    // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
    try {
      this.sheet.insertRule(rule, this.sheet.cssRules.length) // todo - correct index here
    }
    catch(e) {
      if(isDev) {
        // might need beter dx for this
        console.warn('whoops, illegal rule inserted', rule) //eslint-disable-line no-console
      }
    }

  }
  insert(rule) {
    let insertedRule

    if(isBrowser) {
      // this is the ultrafast version, works across browsers
      if(this.isSpeedy && this.sheet.insertRule) {
        this._insert(rule)
      }
      else{
        const textNode = document.createTextNode(rule)
        const lastTag = last(this.tags);
        lastTag.appendChild(textNode)
        insertedRule = { textNode, appendRule: newCss => textNode.appendData(newCss)}
        this.nodes.find(({tag}) => tag === lastTag).nodes.push(textNode);

        if(!this.isSpeedy) {
          // sighhh
          this.sheet = sheetForTag(last(this.tags))
        }
      }
    }
    else{
      // server side is pretty simple
      insertedRule = this.sheet.insertRule(rule)
    }

    this.ctr++
    if(isBrowser && this.ctr % this.maxLength === 0) {
      const tag = this.makeStyleTag();
      this.tags.push(tag)
      this.nodes.push({tag: tag, nodes: []});
      this.sheet = sheetForTag(last(this.tags))
    }
    return insertedRule
  }
  flush() {
    if(isBrowser) {
      this.tags.forEach(tag => tag.parentNode && tag.parentNode.removeChild(tag))
      this.tags = []
      this.nodes = []
      this.sheet = null
      this.ctr = 0
      // todo - look for remnants in document.styleSheets
    }
    else {
      // simpler on server
      this.sheet.cssRules = []
    }
    this.injected = false
  }
  rules() {
    if(!isBrowser) {
      return this.sheet.cssRules
    }
    let arr = []
    this.tags.forEach(tag => arr.splice(arr.length, 0, ...Array.from(
        sheetForTag(tag).cssRules
      )))
    return arr
  }

  relink() {
    this.tags.forEach(tag => this.root.appendChild(tag));
    this.nodes.forEach(({tag, nodes}) => nodes.forEach(node => tag.appendChild(node)));
  }

  setRoot(rootEl) {
    this.root = rootEl;
    this.relink();
  }

  makeStyleTag() {
    let tag = document.createElement('style')
    tag.appendChild(document.createTextNode(''));
    this.root.appendChild(tag)

    return tag
  }
}
