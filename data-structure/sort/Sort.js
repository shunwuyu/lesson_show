/**
 * @typeof {Object} SorterCallbacks
 * @property {function(a:*,b:*)} compareCallback
 */
export default class Sort {
  constructor(originalCallbacks) {
    this.callbacks = Sort.initSortingCallback(originalCallbacks);
    // this.comparator = new Comparator(this.callbacks.)
  }
  /** 
   * @param {SorterCallbacks} originalCallbacks
   * @returns {SorterCallbacks}
   */
  static initSortingCallbacks(originalCallbacks) {
    const callbacks = originalCallbacks || {};
    const stubCallback = () => {}
    callbacks.compareCallback = callbacks.compareCallback || undefined;
    callbacks.visitingCallback = callbacks.visiting
  }
}