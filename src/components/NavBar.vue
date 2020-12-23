<template>
  <ul>
    <li v-for="item in navList" :key="item.label">
      {{item.label}}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      navList: [
        {
          label: 'Javascript 基础',
          link: '/js'
        }
      ]
    }
  }
})
</script>
