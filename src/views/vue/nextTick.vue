<template>
  <div class="article-area">
    <div class="a-title">Vue.nextTick</div>
    <p class="a-p"><a href="https://segmentfault.com/a/1190000020499713">https://segmentfault.com/a/1190000020499713</a></p>

    <div class="a-h2">nextTick的目的是获取正确的DOM</div>

    <div class="a-h3">
      vue是异步更新的。
      当改变数据时， Vue并没有立马更新Dom, 而是将这个变更的watcher加入一个queueWatcher队列。然后执行nextTick异步去执行watcher.run()。
      <span class="a-c-red">由于浏览器的ui render是同步的所以在下一个nextTick中能够获取到DOM</span>
    </div>

    <p class="a-p">
      是为了可以获取更新后的DOM 。触发时机：在同一事件循环中的数据变化后，DOM完成更新，立即执行Vue.nextTick()的回调。
    </p>

    <ul class="a-list">
      <li>1. 一句话总结优先级：microtask 优先。
          Promise > MutationObserver > setImmediate > setTimeout（最后无奈了选择这个）</li>
    </ul>

    <pre><code>
      nextTick 函数。接受两个参数：

      cb 回调函数：是要延迟执行的函数；
      ctx：指定 cb 回调函数 的 this 指向；

      Vue 实例方法 $nextTick 做了进一步封装，把 ctx 设置为当前 Vue 实例。

      export function nextTick(cb?: Function, ctx?: Object) {
        let _resolve;

        // cb 回调函数会经统一处理压入 callbacks 数组
        callbacks.push(() => {
          if (cb) {
            // 给 cb 回调函数执行加上了 try-catch 错误处理
            try {
              cb.call(ctx);
            } catch (e) {
              handleError(e, ctx, 'nextTick');
            }
          } else if (_resolve) {
            _resolve(ctx);
          }
        });

        // 执行异步延迟函数 timerFunc
        if (!pending) {
          pending = true;
          timerFunc(); // 这个方法中延迟调用flushCallbacks方法， 然后遍历callbacks中的方法
        }
    </code></pre>
  </div>
</template>
