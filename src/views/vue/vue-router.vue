<template>
  <div class="article-area">
    <div class="a-title">vue-router</div>
    <div class="a-h1">1.hash模式</div>
    <p class="a-p">
      url #后面部分，改变url 不会刷新页面，通过haschange方法监听url变化
    </p>

    <div class="a-h2">2.history模式</div>
    <p class="a-p">
      通过pushState、replaceState 方法改变Url的path部分，而且不会引起页面刷新
    </p>
    <div class="a-h3">history监听url会复杂些， 主要用到popstate：</div>
    <ul class="a-list">
      <li>浏览器的前进后退会触发popstate事件</li>
      <li>pushState、replaceState和a标签修改url不会触发popstate。实现方法是拦截pushState,replaceState,a标签事件，然后js调用history的go,back,forward</li>
    </ul>
    <pre><code>
      window.addEventListener('DOMContentLoaded', Load)
      window.addEventListener('popstate', PopChange)
      var routeView = null
      function Load() {
        routeView = document.getElementById('route-view')
        // 默认执行一次 popstate 的回调函数，匹配一次页面组件
        PopChange()
        // 获取所有带 href 属性的 a 标签节点
        var aList = document.querySelectorAll('a[href]')
        // 遍历 a 标签节点数组，阻止默认事件，添加点击事件回调函数
        aList.forEach(aNode => aNode.addEventListener('click', function(e) {
          e.preventDefault() //阻止a标签的默认事件
          var href = aNode.getAttribute('href')
          //  手动修改浏览器的地址栏
          history.pushState(null, '', href)
          // 通过 history.pushState 手动修改地址栏，
          // popstate 是监听不到地址栏的变化，所以此处需要手动执行回调函数 PopChange
          PopChange()
        }))
      }
      function PopChange() {
        console.log('location', location)
        switch(location.pathname) {
        case '/page1':
          routeView.innerHTML = 'page1'
          return
        case '/page2':
          routeView.innerHTML = 'page2'
          return
        default:
          routeView.innerHTML = 'page1'
          return
        }
      }
    </code></pre>
    <div class="a-h1">3. router-link router-view</div>
    <ul class="a-list">
      <li>router-view 本质上就是一个 vue的render() 方法</li>
      <li>router-link 渲染成一个a标签</li>
    </ul>
  </div>
</template>
