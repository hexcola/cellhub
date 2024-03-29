/**
 * https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
 * https://jsfiddle.net/pahund/5qtt2Len/1/
 * @param {*} obj 
 */
const clone = (obj) => {
    let copy

    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    if (obj instanceof Date) {
        copy = new Date()
        copy.setTime(obj.getTime())
        return copy
    }
    
    if (obj instanceof Map) {
        return new Map(clone(Array.from(obj)))
    }

    if (obj instanceof Array) {
        copy = []
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i])
        }
        return copy
    }

    if (obj instanceof Object) {
        copy = {}
        for (const attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = clone(obj[attr])
            }
        }
        return copy
    }
    throw new Error('Unable to copy object! Its type isn\'t supported')
}

module.exports = { clone }