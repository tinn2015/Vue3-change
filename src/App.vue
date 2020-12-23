<template>
  <div class="flex wh-full">
    <div class="nav h-full">
      <NavBar></NavBar>
    </div>
    <div class="content h-full">
      <router-view></router-view>
    </div>
  </div>
  <!-- <router-view/> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  components: {
    NavBar
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style lang="less" scoped>
  .nav {
    width: 240px;
    border-right: 1px solid #eee
  }
</style>
