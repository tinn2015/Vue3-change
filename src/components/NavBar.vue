<template>
  <div class="wh-full">
    <el-menu
      :uniqueOpened="false"
      default-active="2"
      class="el-menu-vertical-demo h-full"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template #title>
          <img class="icon" src="../assets/imgs/js.png" alt="">
          <span>Javascript基础</span>
        </template>
        <!-- <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group> -->
        <!-- <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="1-1"><router-link :to="{path: '/vue-router'}">选项1</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template #title>
          <!-- <i class="el-icon-location"></i> -->
          <img class="icon" src="../assets/imgs/vue.png" alt="">
          <span>Vue</span>
        </template>
        <el-menu-item index="1-1"><div @click="routerTo('vueRouter')">vue-router</div></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      navList: [
        {
          label: 'Javascript 基础',
          children: [
            {
              label: '原型&原型链'
            }
          ]
        },
        {
          label: 'Vue',
          children: [
            {
              label: 'vue-router'
            }
          ]
        }
      ]
    }
  },
  methods: {
    routerTo (name: string) {
      this.$router.push({
        name: name
      })
    }
  }
})
</script>

<style lang="less" scoped>
.nav {
  padding: 20px 10px;
  .nav-item {
    height: 40px;
    &:hover {
      background: #eee
    }
  }
}

.icon {
  width: 14px;
  height: 14px;
  margin: 0 10px;
}
</style>
