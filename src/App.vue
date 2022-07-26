

<template>
  <template v-if="$route.path == '/'"><router-view /></template>
  <template v-else>
    <div class="container">
      <my-aside class="left-aside" />
      <el-scrollbar height="100vh" class="center-area">
        <my-header class="top-header" />
        <tags />
        <router-view class="router-view" />
      </el-scrollbar>
    </div>
  </template>
</template>

<script setup>
// vite需要加上vue后缀
import myHeader from "components/Header.vue";
import myAside from "components/Aside.vue";
import Tags from "components/Tags.vue";
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  background-color: $container-bgc;
  .left-aside,
  .top-header {
    background-color: #fff;
  }
  .center-area {
    flex: 1;
    padding: 20px;
    background-color: $container-bgc;
    .router-view {
      margin-bottom: 50px;
    }
  }
}
</style>
