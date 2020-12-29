<template>
  <div class="article-area">
    <p class="a-p">
      <a href="https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md">https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md</a>
    </p>
    <ul class="a-list">
      <div class="a-h2">重要知识点记录：</div>
      <li>1.</li>
    </ul>
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
  </div>
</template>
