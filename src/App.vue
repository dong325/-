<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="includeList">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    // 需要缓存的组件name值
    const includeList = ref(["index"]);
    return {
      includeList,
    };
  },
});
</script>