<template>
  <div class="card">
    <el-tabs v-model="activeName">
      <el-tab-pane
        v-for="(value, key) in msg"
        :key="key"
        :name="value.name"
        :label="`${value.label}(${value.data.length})`"
      >
        <table-pane
          :msg="value.data"
          :type="key"
          @handle-click="handleClick"
          @handle-click-all="handleClickAll"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import TablePane from "./childComps/TablePane.vue";

const activeName = ref("first");

const handleClick = ({ type, index }) => {
  const delItem = msg[type].data.splice(index, 1);
  //  由于delItem返回的是数组，因此必须[0]
  if (type === "read") msg.recycle.data.unshift(delItem[0]);
  else msg.read.data.unshift(delItem[0]);
};

const handleClickAll = (type) => {
  if (type === "unread") msg.read.data = [...msg[type].data, ...msg.read.data];
  else if (type === "read")
    msg.recycle.data = [...msg[type].data, ...msg.recycle.data];

  msg[type].data.length = 0;
};
const msg = reactive({
  unread: {
    name: "first",
    label: "未读消息",
    data: [
      {
        date: "2018-04-19 20:00:00",
        title: "傻蛋",
      },
      {
        date: "2018-04-19 20:00:00",
        title: "你才是傻蛋",
      },
    ],
  },
  read: {
    name: "second",
    label: "已读消息",
    data: [
      {
        date: "2018-04-19 20:00:00",
        title: "小黑是傻蛋",
      },
    ],
  },
  recycle: {
    name: "third",
    label: "回收站",
    data: [
      {
        date: "2018-04-19 20:00:00",
        title: "小红是傻蛋",
      },
    ],
  },
});
</script>

<style lang="scss" scoped>
</style>