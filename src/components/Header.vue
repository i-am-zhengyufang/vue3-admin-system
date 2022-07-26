<template>
  <div class="header">
    <h3 class="title">后台管理系统</h3>
    <div class="right-area">
      <screen-full />
      <error-badge />
      <div class="person-info">
        <img :src="src" alt="" />
        <el-dropdown trigger="click" @command="handleCommand">
          <div class="drop-link">
            <span>{{ username }}</span>
            <iconpark-icon name="down"></iconpark-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="exit" divided
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAvatar } from "@/utils/api";
import { ref, onMounted } from "@vue/runtime-core";

import { useRouter } from "vue-router";

import ScreenFull from "./ScreenFull.vue";
import ErrorBadge from "./ErrorBadge.vue";

const username = localStorage.getItem("username") || "";
const router = useRouter();
const handleCommand = (command) => {
  if (command === "exit") router.push("/login");
};

const src = ref("");

onMounted(async () => {
  const {
    data: { img },
  } = await getAvatar();
  src.value = img;
});
</script>

<style lang="scss">
.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: $base-font-color;
  iconpark-icon {
    cursor: pointer;
  }
  .title {
    margin: 0 300px 0 10px;
  }
  .right-area {
    display: flex;
    align-items: center;
    margin-right: 20px;

    .person-info {
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 20px;
      }
    }
  }
}
</style>
