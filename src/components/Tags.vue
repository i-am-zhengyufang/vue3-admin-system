<template>
  <div class="tags-wrap" v-if="tagsStore.isShow">
    <el-tabs
      v-model="targetname"
      type="card"
      closable
      @tab-remove="closeTag"
      @tab-click="clickTag"
    >
      <el-tab-pane
        v-for="tag in tagsStore.list"
        :label="tag.title"
        :key="tag.name"
        :name="tag.name"
      >
      </el-tab-pane>
    </el-tabs>
    <el-dropdown @command="handleTags">
      <el-button type="primary">
        标签选项
        <iconpark-icon name="down"></iconpark-icon>
      </el-button>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useTagsStore } from "@/store";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const router = useRouter();
const isActive = (path) => path === route.path;
const targetname = ref("home");
const tagsStore = useTagsStore();
const clickTag = (params) => {
  router.push({ name: params.props.name });
};
const closeTag = (name) => {
  const index = tagsStore.list.findIndex((x) => x.name === name);
  const delTag = tagsStore.list[index];
  //  如果删除的是活跃的路由，那还要单独处理
  tagsStore.delTagItem(index);
  if (isActive(delTag.path)) {
    // 删除了元素之后tagsStore.list[index]就不等于tagsStore.list[index]了
    // 考虑删除的tab在最左或者最右
    const item = tagsStore.list[index]
      ? tagsStore.list[index]
      : tagsStore.list[index - 1];
    if (item) router.push(item.path);
    else router.push("/home");
  }
};
const clearTags = () => {
  tagsStore.clearTags();
  router.push("/home");
};
const closeOtherTags = () => {
  // 找出当前活跃的标签,调用35行的isActive函数
  const curTag = tagsStore.list.find((tag) => isActive(tag.path));
  tagsStore.closeOtherTags(curTag);
};
const handleTags = (command) => {
  command === "all" ? clearTags() : closeOtherTags();
};

watch(
  route,
  () => {
    if (route.path !== "/login") {
      targetname.value = route.name;
      const isExist = tagsStore.list.some((tag) => tag.path === route.path);
      if (!isExist) {
        /* 如果还没添进去 */
        tagsStore.addTagItem({
          name: route.name,
          title: route.meta.title,
          path: route.path,
        });
      }
    }
  },
  {}
);
</script>

<style lang="scss">
.tags-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  .el-tabs {
    width: calc(100% - 150px);
    .el-tabs__header {
      border-bottom: 0;
      margin: 0;
      display: flex;
      align-items: center;
      .el-tabs__nav {
        border: 0;
      }

      .el-tabs__item {
        box-sizing: border-box;
        margin-right: 5px;
        height: $base-tag-item-height;
        line-height: $base-tag-item-height;
        border: 1px solid $app-bgc;
        border-radius: 12px;

        &.is-active {
          border: 1px solid $app-bgc;
        }
      }
    }
  }
}
</style>