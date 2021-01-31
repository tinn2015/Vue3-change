<template>
  <div class="article-area">
    <p class="a-p">
      <a href="https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md">https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md</a>
    </p>
    <div class="a-h3">1. 异步与块级作用域</div>
    <pre>
      <code lang="js">
        for (var i = 0; i &lt; 5; i++) {
          setTimeout(() => {
            console.log(i);
          }, 1000);
        }

        for (let i = 0; i &lt; 5; i++) {
          setTimeout(() => {
            console.log(i);
          }, 1000);
        }
      </code>
    </pre>

    <div class="a-h3">2. let 暂时性死区, var 变量提升</div>
    <pre>
      <code>
        function sayHi() {
          console.log(name);
          console.log(age);
          var name = "Lydia";
          let age = 21;

          console.log(log())
          function log () {
            console.log('1')
          }
        }
        sayHi();
      </code>
    </pre>
    <div class="a-c-red">
      * Uncaught ReferenceError: Cannot access 'a' before initialization
    </div>
    <div class="a-c-red">
      * 函数声明会将整个函数提升到作用于上面
    </div>

    <div class="a-h3">3. 箭头函数会对执行的上下文有个引用， 导致不会被垃圾回收</div>
    <pre><code>
      let config = {
        alert: setInterval(() => {
          console.log('Alert!')
        }, 1000)
      }

      config = null
    </code></pre>

    <div class="a-h3">4. 没有参数， 解构生成新对象</div>
    <pre><code>
      const person = {
        name: "Lydia",
        age: 21
      }

      const changeAge = (x = { ...person }) => x.age += 1
      const changeAgeAndName = (x = { ...person }) => {
        x.age += 1
        x.name = "Sarah"
      }

      changeAge(person)
      changeAgeAndName()

      console.log(person)
    </code></pre>

    <div class="a-h3">5. ==， === 先执行两边再对比</div>
    <pre><code>
      const name = "Lydia Hallie";
      console.log(!typeof name === "object");
      console.log(!typeof name === "string");
    </code></pre>

    <div class="a-h3">8. 任务队列中先执行宏任务，再执行微任务</div>

    <pre><code>
      const myPromise = Promise.resolve(Promise.resolve("Promise!"));
      function funcOne() {
        myPromise.then(res => res).then(res => console.log(res));
        setTimeout(() => console.log("Timeout!", 0));
        console.log("Last line!");
      }

      async function funcTwo() {
        const res = await myPromise;
        console.log(await res);
        setTimeout(() => console.log("Timeout!", 0));
        console.log("Last line!");
      }

      funcOne();
      funcTwo();

      // Last line! Promise! Promise! Last line! Timeout! Timeout!
      // setTimeout 是在指定延迟后 将回调添加到 宏任务队列
    </code></pre>

    <div class="a-h3">9. 变量引用关系</div>

    <pre><code>
      var foo = { n: 1 };
      (function(foo) {
        console.log(foo.n);
        foo.n = 3;
        foo = { n: 2 };
        console.log(foo.n);
      })(foo)

      console.log(foo.n);

    var foo = { n: 1 };
    (function(foo){            // 形参 foo 同实参 foo 一样指向同一片内存空间，这个空间里的 n 的值为 1
        var foo;               // 优先级低于形参，无效。
        console.log(foo.n);    // 输出 1
        foo.n = 3;             // 形参与实参 foo 指向的内存空间里的 n 的值被改为 3
        foo = { n: 2 };        // 形参 foo 指向了新的内存空间，里面 n 的值为 2.
        console.log(foo.n);    // 输出新的内存空间的 n 的值
    })(foo);
    console.log(foo.n);        // 实参 foo 的指向还是原来的内存空间，里面的 n 的值为 3.

    </code></pre>

    <div class="a-h3">10. 函数是一等公民</div>
    <pre><code>
      // 首先是fun
      var a = 1;
      function b() {
        a = 10;
        return;
        // 首先是a的变量提升
        // 其次在b块级作用域中函数法声明变量a， 此时申明的为块级作用于
        function a() {}
      }
      b();
      console.log(a); // 1
    </code></pre>

    <div class="a-h3">11. Promise</div>
    <p class="a-p a-c-red">不能返回 promise 本身，会造成死循环</p>
    <pre><code>
      const promise = new Promise((resolve, reject) => {
        resolve('success1');  // resolve后Promise状态改为resolved, 后面改变Promise状态的将不会执行
        reject('error');
        console.log(2);      // 其他代码仍旧执行
        resolve('success2');
      });

      promise.then((res) => {
        console.log('then1: ', res);
        return '33'  // return 会被包装成resolve
      }).then((res) => {
        console.log('then2: ', res);
      }).catch((error) => {
        console.log('catch: ', error);
      });

      Promise
      .resolve(1)
      .then(2)
      .then(Promise.resolve(3))
      .then(console.log);

      /**
        执行顺序和分析：
        顺序：
          * 1
        分析：
          1. .then 和 .catch 的参数希望是函数，传入非函数会发生值透传
          2. 值透传导致第 1 个 then 和第 2 个 then 传入的都不是函数，导致它传到最后的 1 个 then 里面
      */

      Promise
      .reject('err')  // reject 优先进入then的第二个参数，没有第二个参数则进入catch
      .then((res) => {
        console.log('success: ', res);
      }, (err) => {
        console.log('error: ', err);
      }).catch((err) => {
        console.log('catch: ', err);
      })

    </code></pre>
    <div class="a-h2">async/await</div>
    <ul class="a-list">
      <li>遇见await直接执行里面的内容</li>
      <li>await后面的任务加入到微任务</li>
      <li>async 函数中抛出了错误，则终止错误结果，不会继续向下执行。throw new Error 也是如此</li>
    </ul>
    <pre><code>
      // 题目1
      async function async1() {
        console.log(1);
        await async2();
        console.log(2);
      }

      async function async2() {
        console.log(3);
      }

      async1();

      console.log(4);
      // 1
      // 3
      // 4
      // 2

      // 题目2
      async function async1() {
        await async2();
        console.log('async1');
        return 'async1 success';
      }

      async function async2() {
        return new Promise((resolve, reject) => {
          console.log('async2');
          reject('error');
        })
      }

      async1().then((res) => {
        console.log('res: ', res);
      })
      // 'async2'
      //  'Promise' rejected: "error"
    </code></pre>
  </div>
</template>
