<template>
  <div class="article-area">
    <div class="a-title">重点笔记</div>
    <div class="h2"><a href="https://juejin.cn/post/6914831351271292936?utm_source=gold_browser_extension" target="_blank">js基础</a></div>
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

    <div class="a-h2">10. Event Loop执行顺序</div>
    <p class="a-p">所有同步任务都在主线程上执行， 形成一个执行栈， 主线程之外会有一个任务队列。</p>
    <ul class="a-list2">
      <li>一开始整个脚本 script 作为一个宏任务执行</li>
      <li>执行过程中，同步代码 直接执行，宏任务 进入宏任务队列，微任务 进入微任务队列。</li>
      <li>当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完毕。</li>
      <li>执行浏览器 UI 线程的渲染工作。（window.resize, requestAnimationFrame）</li>
      <li>检查是否有 Web Worker 任务，有则执行。</li>
      <li>执行完本轮的宏任务，回到步骤 2，依次循环，直到宏任务和微任务队列为空。</li>
    </ul>

    <div class="a-h2">11. css 权重</div>
    <p class="a-p a-ft-w">!important > 内联样式(1000) > id(100) > class(10) > 元素(1)</p>
    <ul class="a-list">
      <li>1. 根据权重计算</li>
      <li>2. 权重相同则后声明的优先</li>
    </ul>

    <div class="a-h2">12. == 与 ===</div>
    <div class="a-h3">===</div>
    <ul class="a-list">
      <li>类型且值相等则相等</li>
    </ul>
    <div class="a-h3">==</div>
    <ul class="a-list">
      <li>类型相同， 进行===比较</li>
      <li>类型不同则转换类型再比较</li>
    </ul>
    <pre><code>
      1. undefined === null  // false
      2. undefined == null   // true
      3. '12' == 12     // true 字符串转为数字再进行比较
      4. 1 == true    // true   Boolean 跟数字进行比较， true -> 1, false -> 0
      5. [1,2] == '12' // false   引用类型跟字符换进行比较时 引用类型转为字符串(toString()) 再比较
      6. [1] == 1   // false   引用类型跟数字进行比较时 引用类型先转为字符串再转为数字再进行比较
      7. {a: 1} == true // false  引用类型跟Boolean进行比较， 引用类型先转为字符串再转为数字， Boolean直接转为数字
      8. NaN == NaN // false
      9. NaN === NaN // false  判断NaN的唯一方法是isNaN()
    </code></pre>

    <div class="a-h2">13. typeof</div>
    <p class="a-p">
      typeof可以识别出基本类型boolean,number,undefined,string,symbol，但是不能识别null。不能识别引用数据类型，会把null、array、object统一归为object类型,但是可以识别出function。
      所以typeof可以用来识别一些基本类型。
    </p>
    <pre><code>
      console.log(typeof bool); //boolean
      console.log(typeof num);//number
      console.log(typeof str);//string
      console.log(typeof und);//undefined
      console.log(typeof nul);//object
      console.log(typeof arr);//object
      console.log(typeof obj);//object
      console.log(typeof fun);//function
      console.log(typeof s1); //symbol
    </code></pre>

    <div class="a-h2">14. ++</div>
    <p class="a-p">后置时先返回后增加， 前置时先增加再返回</p>
    <pre><code>
      let number = 0;
      console.log(number++);
      console.log(++number);
      console.log(number);

      // 0 2 2
    </code></pre>
  </div>
</template>
