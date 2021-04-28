function deepClone(value) {
  let isObject = typeof value === 'object'
  const plainObject = '[object Object]'
 console.log(isObject)
 let result = isObject ? {} : []

 if (isObject) {

 } else {
   result = value
 }
 return result
}

let t = deepClone('abab')
console.log(t)