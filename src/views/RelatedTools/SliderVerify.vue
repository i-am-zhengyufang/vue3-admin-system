<template>
  <div class="card">
    <slide-verify
      ref="block"
      :slider-text="text"
      :accuracy="accuracy"
      @again="onAgain"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
    ></slide-verify>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
// 局部注册组件，需要单独引用组件样式
// 只提供局部引用的方式，不再采用插件形式，方便按需加载，减少主包大小
import SlideVerify from "vue3-slide-verify";
import "vue3-slide-verify/dist/style.css";

export default defineComponent({
  components: { SlideVerify },

  setup() {
    const block = ref();

    const onAgain = () => {
      msg.value = "检测到非人为操作的哦！ try again";
      // 刷新
      block.value?.refresh();
    };

    const onSuccess = (times) => {
      ElMessage({
        message: `验证通过, 耗时${(times / 1000).toFixed(1)}s`,
        type: "success",
      });
    };

    const onFail = () => {
      ElMessage.error("校验失败");
    };

    const onRefresh = () => {
      console.log("点击了刷新");
    };
    return {
      block,
      text: "拖动滑块完成拼图",
      accuracy: 4,
      onAgain,
      onSuccess,
      onFail,
      onRefresh,
    };
  },
});
</script>
<style lang="scss" scoped>
.slide-verify {
  .slide-verify-slider {
    .slide-verify-slider-mask {
      background-color: $fill-bgc;
      border-color: $app-bgc;
      .slide-verify-slider-mask-item {
        border: none;
        &:hover {
          background-color: $app-bgc;
        }
      }
    }
  }
}
</style>