<template>
  <div class="article-area">
    <div class="a-title">重点笔记</div>
    <div>
      <p class="a-h2">1. 箭头函数没有原型对象</p>
      <pre><code>
        let a = () => {}
        console.log(a.prototype)  // undefined
      </code></pre>
    </div>
    <div class="a-h2">2. 数组方法及返回</div>
    <ul class="a-list">
      <li>push, unshift  返回数组长度</li>
      <li>shift, pop 会改变原数组</li>
      <li>slice(start, end)</li>
      <pre><code>
        slice(a, b)截取 开始下标 -> 结束下标， 但是不包括结束下标
        slice(a) 截取 下标a -> 数组结束
        slice 不改变原始数组
        slice(-4, -1)  出现负数将负数 + 数组长度 转为正数
      </code></pre>
      <li>splice(start, len, replace1, replace2) 返回被删除的子数组</li>
      <pre><code>
        a = [1,2,3,4,5,6,7]
        console.log(a.splice(1, 3)) [2,3,4]   a -> [1,5,6,7]
        console.log(a.splice(2,1,9)) [3]  a -> [1,2,9,4,5,6,7]
        console.log(a.splice(1,0,11,12)) []  a ->  [1,11,12,2,3,4,5,6,7]
      </code></pre>
    </ul>
    <div class="a-h2">3.字符串方法</div>
    <ul class="a-list">
      <li>slice(start, end) 不改变原字符串</li>
      <li>substr(start, length) & substring(start, end) 都不改变字符串</li>
    </ul>
    <div class="a-h2">4.Symbol 类型不可枚举</div>

    <pre><code>
      const info = {
        [Symbol('a')]: 'b'
      }
      console.log(Object.keys(info)) // []
    </code></pre>

    <div class="a-h2">5."+"运算符</div>
    <pre><code>
      // 1. 数字相加  2. 当发现不是数字时将强制转为字符串相加
      1 + 2 -> 3
      1 + 'a' -> '1a'
      {a: 1} + 2 -> '[object object]2'
    </code></pre>

    <div class="a-h2">6. Number.isNaN() 判断是否为数字 且 等价于 NaN, isNaN() 判断是否为number</div>

    <div class="a-h2">7. Array.flat(2) 将一个多维数组扁平化， 处理深度为2</div>
    <pre><code>
      const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];
      console.log(emojis.flat(1));
    </code></pre>

    <div class="a-h2">8. Object.seal()</div>
    <p class="a-p">使用 Object.seal 我们可以防止新属性 被添加，或者存在属性 被移除. 然而，你仍然可以对存在属性进行更改。</p>

    <div class="a-h2">9. 判断数据类型：Array.prototype.toString.call</div>
    <pre><code>
      Object.prototype.toString.call(num), // [object Number]
      Object.prototype.toString.call(str), // [object String]
      Object.prototype.toString.call(bool), // [object Boolean]
      Object.prototype.toString.call(arr), // [object Array]
      Object.prototype.toString.call(json), // [object Object]
      Object.prototype.toString.call(func), // [object Function]
      Object.prototype.toString.call(und), // [object Undefined]
      Object.prototype.toString.call(nul), // [object Null]
      Object.prototype.toString.call(date), // [object Date]
      Object.prototype.toString.call(reg), // [object RegExp]
      Object.prototype.toString.call(error), // [object Error]
    </code></pre>

  </div>
</template>
