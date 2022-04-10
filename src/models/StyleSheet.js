/* Wraps glamor's stylesheet and exports a singleton for styled components
to use. */
import { StyleSheet as GlamorSheet } from '../vendor/glamor/sheet'

class StyleSheet {
  constructor () {
    /* Don't specify a maxLength for the global sheet, since these rules
     * are defined at initialization and should remain static after that */
    this.globalStyleSheet = new GlamorSheet({ speedy: false })
    this.componentStyleSheet = new GlamorSheet({ speedy: false, maxLength: 40 })
  }
  get injected () {
    return this.globalStyleSheet.injected && this.componentStyleSheet.injected
  }
  inject () {
    this.globalStyleSheet.inject()
    this.componentStyleSheet.inject()
  }
  flush () {
    if (this.globalStyleSheet.sheet) this.globalStyleSheet.flush()
    if (this.componentStyleSheet.sheet) this.componentStyleSheet.flush()
  }
  insert (rule, opts = { global: false }) {
    const sheet = opts.global ? this.globalStyleSheet : this.componentStyleSheet
    return sheet.insert(rule)
  }
  rules () {
    return this.globalStyleSheet.rules().concat(this.componentStyleSheet.rules())
  }

  relink () {
    this.globalStyleSheet.relink()
    this.componentStyleSheet.relink()
  }

  setRoot (rootEl) {
    this.globalStyleSheet.setRoot(rootEl)
    this.componentStyleSheet.setRoot(rootEl)
  }
}

/* Export stylesheet as a singleton class */
export default new StyleSheet()
