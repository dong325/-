<template>
  <div class="btnGroup">
    <button
      v-for="(item, index) in listData"
      :key="index"
      @click="changeColor(index)"
      :class="activeIndex === index ? 'active' : ''"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: ["Button1", "Button2", "Button3", "Button4", "Button5"],
      // 标记被选中的按钮的index
      activeIndex: null,
    };
  },
  methods: {
    changeColor(index) {
        this.activeIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.btnGroup {
  width: 500px;
  height: 100px;
  button {
    width: 15%;
    height: 35%;
    margin: 20px 0 20px 20px;
    background-color: pink;
    border: 1px solid skyblue;
  }

  // 被选中的按钮的样式
  .active {
    background-color: antiquewhite;
  }
}
</style>
