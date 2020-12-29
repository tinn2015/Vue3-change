<template>
  <div class="article-area">
    <div class="a-h2">1. call</div>
    <pre><code>
      Function.prototype.myCall = function () {
        let args = Array.from(arguments)
        let context = args.shift()
        let fn = this

        context.fn = fn

        context.fn(...args)

        delete context.fn

      }
      </code></pre>
  </div>
</template>
