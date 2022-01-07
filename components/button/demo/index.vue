<template>
    <h1>Button Page</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {

  },
  setup() {
    return {};
  },
});
</script>
<style>
[id^='components-button-demo-'] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^='components-button-demo-'] .ant-btn-rtl {
  margin-right: 0;
  margin-left: 8px;
}
[id^='components-button-demo-'] .ant-btn-group > .ant-btn,
[id^='components-button-demo-'] .ant-btn-group > span > .ant-btn {
  margin-right: 0;
}
[data-theme='dark'] .site-button-ghost-wrapper {
  background: rgba(255, 255, 255, 0.2);
}
</style>
