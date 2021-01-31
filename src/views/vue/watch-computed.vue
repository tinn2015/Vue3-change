<template>
  <div class="article-area">
    <div class="a-title">Watch&Computed</div>
    <div class="a-h1">使用场景：</div>
    <ul class="a-list">
      <li>watch擅长处理的场景：<span class="a-c-red">一个数据影响多个数据</span></li>
      <li>computed擅长处理的场景：<span class="a-c-red">一个数据受多个数据影响</span></li>
    </ul>
    <div class="a-h1">设计的区别：</div>
    <ul class="a-list">
      <li>Computed具有缓存，页面重新渲染，依赖的值没有发生变化就直接返回上次计算的结果。</li>
      <li>Watch不具有缓存，页面重新渲染，就会重新执行。</li>
      <li>Computed中不能执行异步方法。</li>
    </ul>
  </div>
</template>
