function add (...args) {
    // console.log(args)
    let nums = Array.from(arguments)
    let x = nums.reduce((pre, cur) => {
      return pre + cur
    }, 0)
      let sum = x
      let fn = function () {
        let nums = Array.from(arguments)
        let y = nums.reduce((pre, cur) => {
          return pre + cur
        }, 0)
        sum += y
        // console.log(sum)
        return fn
      }

      fn.toString = function () {
        return sum
      }

      return fn
    }
    // console.log(add(5,3)(2,3)(4) + 1)
    // add(1)(2)(3)

    

class MyPromise {
  static all (pList) {
    //  尽量写const
    const result = []
    let count = 0
    return new Promise((resolve, reject) => {
      pList.forEach((p, index) => {
        Promise.resolve(p).then((res) => {
          result[index] = res
          count++
          if (count === pList.length) {
            resolve(result)
          }
        }).catch((err) => {
          reject(err)
        })
      })
    })
  }
}

async function queue (pList) {
  const result = []
  // 迭代器 for  of, while
  for (let i = 0; i < 3; i++) {
    // let curPromise = pList[i]
    let res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(i + '\n')
        resolve(i)
      }, 1000)
    })
    result.push(res)
  }
}
// queue()

function quickSort (arr) {

  function sort (subArr) {
    if (subArr.length <= 1) return subArr
    let firstNum = subArr[0]
    let leftArr = []
    let rightArr = []
    let res = null
    subArr.forEach(i => {
      if (i < firstNum) {
        leftArr.push(i)
      }
      if (i > firstNum) {
        rightArr.push(i)
      }
    })
    return [...sort(leftArr), firstNum, ...sort(rightArr)]
  }
  return sort(arr)
}
// console.log(quickSort([10,27,2,443,17,8,10]))

// function fn() {

//   return this.length+1;
 
//  }
 
//  var obj = {
 
//   length: 5,
 
//   test1: function() {
 
//    return fn();
 
//   }
 
//  };
 
//  obj.test2=fn;
 
//  //下面代码输出是什么
 
//  console.log(obj.test1())
 
//  console.log(fn()===obj.test2())
// // 运行时 谁调用， this


function Foo () {
  getName = function () {
    console.log(1)
  }
  console.log('this is' + this)
  return this
}

Foo.getName = function () {
  console.log(2)
}
Foo.prototype.getName = function () {
  console.log(3)
}
var getName = function () {
  console.log(4)
}
function getName () {
  console.log(5)
}
// 请写出一下的输出结果
// Foo.getName() //2
// getName() //4
// Foo().getName() //1
// getName() //1
// new Foo.getName() //2
// new Foo().getName() //  3
// new new Foo().getName() //3
var foo = Object.create(Foo))
console.log(foo)

foo.__proto__ = Foo