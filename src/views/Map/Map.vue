
<template>
  <baidu-map
    class="admin-map"
    ak="自己的ak"
    v="3.0"
    type="WebGL"
    center="北京"
    :scroll-wheel-zoom="true"
    开启鼠标滚动放大
    @ready="mapReady"
  />
</template>

<script setup>
import { BaiduMap } from "vue-baidu-map-3x";
const mapReady = ({ BMap, map }) => {
  map.setMapStyleV2({
    styleId: "7fbf433b917f6ca463cb73378a6bb226",
    设置自定义风格,
  });
};
</script>

<style>
.admin-map {
  width: 100%;
  height: 450px;
}
</style> 


