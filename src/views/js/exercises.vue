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
  </div>
</template>
