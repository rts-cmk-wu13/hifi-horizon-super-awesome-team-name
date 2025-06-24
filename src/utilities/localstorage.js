/**
 * Save an item to Local Storage as a string
 * @param {string} key - key to be used in local storage
 * @param {string | number | boolean | object | any[]} value - value to be saved
 * @returns {string}
 */
export function saveToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
    return "Data was saved with the key" + key
}
/**
 * Read from Local Storage as original datatype
 * @param {string} key - key to be read from Local Storage 
 * @returns {string | number | boolean | object | any[]}
 */
export function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}
/**
 * Delete an item from Local Storage
 * @param {string} key 
 * @returns {string | number | boolean | object | any[]}
 */
export function deleteFromLocalStorage(key) {
    localStorage.removeItem(key)
    return "The element with key" + key + "was deleted.";
}