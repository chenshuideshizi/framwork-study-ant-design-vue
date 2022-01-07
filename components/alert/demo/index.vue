<template>
  <div><h2>Alart Page</h2></div>
</template>
<script>
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  US,
  components: {

  },
  setup() {
    return {};
  },
});
</script>
<style>
[id^='components-alert-demo'] .ant-alert {
  margin-bottom: 16px;
}
</style>
