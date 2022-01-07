<template>
  <div class="layout-index">
    <h2>Layout Index Title</h2>
    <router-view></router-view><!-- 为什么 router-view 标签内不能写内容 -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutIndex',
  setup() {

  }
})
</script>

