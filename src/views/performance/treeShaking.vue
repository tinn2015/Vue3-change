<template>
  <div class="article-area">
    <div class="a-title">tree shaking 是在编译阶段分析出无用的代码，优化打包体积</div>

    <div class="a-h2">1.主流的模块化方案:</div>
    <ul class="a-list">
      <li>UMD</li>
      <li class="no-style">
        <p class="a-p">
          UMD实际就是AMD + CommonJs + 全局变量。
          这段代码就是对当前运行环境的判断，如果是 Node 环境 就是使用 CommonJs 规范， 如果不是就判断是否为 AMD 环境， 最后导出全局变量。有了 UMD 后我们的代码和同时运行在 Node 和 浏览器上
          所以现在前端大多数的库最后打包都使用的是 UMD 规范
        </p>
      </li>
      <li>CommonJs</li>
      <li class="no-style">
        <p class="a-p">
          Nodejs 环境所使用的模块系统就是基于CommonJs规范实现的，我们现在所说的CommonJs规范也大多是指Node的模块系统。
          关键字：<span class="a-c-red">module.exports exports require</span>
        </p>
      </li>
      <li>Es6 module</li>
      <li class="no-style">浏览器端模块化方案。关键字：<span class="a-c-red">export, export.default, import</span></li>
    </ul>

    <div class="a-h2">2.common.js 和 es6 中模块引入的区别？</div>
    <p class="a-p">
      CommonJS 是一种模块规范，最初被应用于 Nodejs，成为 Nodejs 的模块规范。运行在浏览器端的 JavaScript 由于也缺少类似的规范，在 ES6 出来之前，前端也实现了一套相同的模块规范 (例如: AMD)，用来对前端模块进行管理。自 ES6 起，引入了一套新的 ES6 Module 规范，在语言标准的层面上实现了模块功能，而且实现得相当简单，有望成为浏览器和服务器通用的模块解决方案。
      但目前浏览器对 ES6 Module 兼容还不太好，我们平时在 Webpack 中使用的 export 和 import，会经过 Babel 转换为 CommonJS 规范。
    </p>

    <p class="a-p a-c-red">CommonJS规范规定，每一个JS文件就是一个模块，有自己的作用域；在一个模块中定义的变量、函数等都是私有变量，对其他文件不可见。每个模块内部都有一个module变量，代表当前模块；这个变量是一个对象，它的exports属性（即module.exports）提供对外导出模块的接口。</p>

    <ul class="a-list2">
      <li>CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。</li>
      <li>CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。</li>
      <li>CommonJs 是单个值导出，ES6 Module可以导出多个</li>
      <li>CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层</li>
      <li>CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined</li>
    </ul>
  </div>
</template>
