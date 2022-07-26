<template>
  <div ref="chartRef" style="width: 100%; height: 100%"></div>
</template>

<script setup>
import debounce from "lodash/debounce";
import { ref, inject, onMounted, onBeforeUnmount } from "vue";
const props = defineProps(["option"]);
const chartRef = ref();
const $echarts = inject("$echarts");
let mychart;

const echartsInit = () => {
  mychart = $echarts.init(chartRef.value);
  mychart.setOption(props.option);
};
const resizeHandler = debounce(() => {
  mychart.resize();
}, 500);

onMounted(() => {
  echartsInit();
  window.addEventListener("resize", resizeHandler);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeHandler);
});
</script>

<style>
</style>