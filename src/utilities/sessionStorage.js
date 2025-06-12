/**
 * Save an item to Session Storage as a string
 * @param {string} key - key to be used in Session storage
 * @param {string | number | boolean | object | any[]} value - value to be saved
 * @returns {string}
 */
function saveToSessionStorage(key, value){
    sessionStorage.setItem(key, JSON.stringify(value))
    return "Data was saved with the key" + key
}
/**
 * Read from Session Storage as original datatype
 * @param {string} key - key to be read from Session Storage 
 * @returns {string | number | boolean | object | any[]}
 */
function readFromSessionStorage(key) {
    return JSON.parse(sessionStorage.getItem(key))
}
/**
 * Delete an item from Session Storage
 * @param {string} key 
 * @returns {string | number | boolean | object | any[]}
 */
function deleteFromSessionStorage(key) {
    sessionStorage.removeItem(key)
    return "The element with key" + key + "was deleted.";
}