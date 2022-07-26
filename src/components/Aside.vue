<template>
  <el-scrollbar height="100vh">
    <div class="left-menu">
      <iconpark-icon
        @click="changeCollapse"
        class="collapse-btn"
        :name="isCollapse ? 'menu-fold-one' : 'menu-unfold-one'"
      ></iconpark-icon>
      <el-menu
        router
        unique-opened
        :default-active="route.path"
        :collapse="isCollapse"
      >
        <template v-for="item in leftroutes" :key="item">
          <template v-if="item.children">
            <el-sub-menu :index="item.path">
              <template #title>
                <iconpark-icon :name="item.meta.icon"></iconpark-icon>
                <span>{{ item.meta.title }}</span>
              </template>
              <template v-for="subItem in item.children" :key="subItem">
                <template v-if="subItem.children">
                  <el-sub-menu :index="item.path + '/' + subItem.path">
                    <template #title>
                      <span>{{ subItem.meta.title }}</span>
                    </template>
                    <el-menu-item
                      :index="`${item.path}/${subItem.path}/${threeItem.path}`"
                      v-for="threeItem in subItem.children"
                      :key="threeItem"
                    >
                      <span>{{ threeItem.meta.title }}</span>
                    </el-menu-item>
                  </el-sub-menu>
                </template>
                <template v-else>
                  <el-menu-item :index="item.path + '/' + subItem.path">
                    <span>{{ subItem.meta.title }}</span>
                  </el-menu-item>
                </template>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.path">
              <iconpark-icon :name="item.meta.icon"></iconpark-icon>
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </el-scrollbar>
</template>

<script setup>
import { ref } from "vue";
import { leftroutes } from "@/router";
import { useRoute } from "vue-router";
const isCollapse = ref(false);
const route = useRoute();
const changeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style scoped lang="scss">
.left-menu {
  margin-bottom: 50px;
  overflow-x: hidden;
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
  }
  iconpark-icon {
    margin-right: 10px;
    &.collapse-btn {
      margin: 30px 0 20px 15px;
      @include round-icon($bgc: $fill-bgc);
      cursor: pointer;
    }
  }
}
</style>