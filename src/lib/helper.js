// 
/**
 * Funtion to check, if any input is undefined
 *
 * @param {any[]} arguments The array of arguments to check.
 * @returns {boolean} True if any input is undefined, false otherwise.
 */
export function InputUndefinedCheck() {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
      if (typeof args[i] === 'undefined') {
        return true;
      }
    }
    return false
  }