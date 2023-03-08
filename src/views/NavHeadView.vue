<template>
  <el-breadcrumb separator="/">
   <!-- 自定义返回函数 -->
    <el-breadcrumb-item @click="goback"> ← 返回</el-breadcrumb-item>
    <!--item.meta.title  显示的还是路由里面的名字 -->
    <el-breadcrumb-item v-for="(item, index) in navArray">{{
      item.meta.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
// 引入这样的组件
import { useRoute, useRouter } from "vue-router";
//引入监听函数
import { watch, ref, onMounted } from "vue";
// 自定义变量
const navArray = ref([]);
// 就要这样用，记死
const route = useRoute();
const router = useRouter();

// 监听函数监听路径的变化
watch(
  () => route.path,
  (newValue, oldValue) => {
    // route.matched 目前匹配的是哪个 获得的值赋给  navArray.valu 上面用 v-for遍历值
    navArray.value = route.matched;
  }
);

// 返回上一页，调用的组件 router.back();
const goback = () => {
  //点击了返回按钮
  router.back();
};
</script>