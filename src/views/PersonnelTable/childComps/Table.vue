<template>
  <div class="table-box">
    <div class="top-panel">
      <div class="btn-group">
        <el-button type="success" class="btn-box" @click="handleAdd">
          <iconpark-icon name="add"></iconpark-icon>
          <span class="text">添加</span>
        </el-button>
        <el-button type="danger" class="btn-box" @click="handleBatchDelete">
          <iconpark-icon name="delete"></iconpark-icon>
          <span class="text">删除</span>
        </el-button>
      </div>
      <div class="search-box">
        <el-input
          v-model.trim="queryWords"
          placeholder="输入你要查找的用户名"
          clearable
        >
          <template #prepend>
            <iconpark-icon name="search"></iconpark-icon>
          </template>
        </el-input>
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </div>
    </div>
    <el-table
      @selection-change="handleSelect"
      :data="list"
      style="width: 99%"
      height="410"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" />
      <el-table-column prop="name" label="用户名" width="120">
        <template #default="{ row }">
          <highlight-text :text="row.name" :highlightText="queryWords" />
        </template>
      </el-table-column>
      <el-table-column
        prop="addr"
        label="地址"
        width="180"
        :formatter="formatAddr"
      />

      <el-table-column
        prop="smallImg"
        align="center"
        label="头像(点击查看大图)"
        width="200"
      >
        <template #default="{ row }">
          <!-- preview-teleported="true"是百度到的防止预览图被表格穿透 -->
          <el-image
            :preview-teleported="true"
            :src="row.bigImg"
            :preview-src-list="imgs"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态" width="120">
        <template #default="{ row }">
          <el-tag :type="statusFilter(row.status)">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="balance"
        align="center"
        sortable
        label="余额(元)"
        width="150"
      />
      <el-table-column align="center" label="操作" width="150px">
        <template #default="{ row }">
          <el-button
            text
            class="handle-row-btn"
            type="warning"
            @click="handleEdit(row)"
            >编辑</el-button
          >
          <el-button
            text
            class="handle-row-btn"
            type="warning"
            @click="handleDelete(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits, ref } from "@vue/runtime-core";

import HighlightTextVue from "components/HighlightText.vue";

const props = defineProps(["list"]);
const emit = defineEmits([
  "handleEdit",
  "handleDelete",
  "handleBatchDelete",
  "handleQuery",
]);

const queryWords = ref("");
const selectRows = ref([]);

const formatAddr = (row, col) => {
  return row.addr.join(" ");
};
const handleEdit = (row) => {
  emit("handleEdit", row);
};
const handleDelete = (row) => {
  emit("handleDelete", row);
};
const handleSelect = (rows) => {
  console.log(">>>", rows);
  selectRows.value = rows;
  console.log(selectRows);
};
const handleAdd = () => {
  emit("handleAdd");
};
const handleBatchDelete = () => {
  emit("handleBatchDelete", selectRows);
};
const handleQuery = () => {
  emit("handleQuery", queryWords);
};
const imgs = computed(() => {
  return props.list.map((item) => item.bigImg);
  console.log("预览", imgs);
});
const statusFilter = (status) => {
  const statusObj = {
    未启用: "info",
    正常启用: "success",
    禁用: "danger",
  };
  return statusObj[status];
};
</script>

<style lang="scss" scoped>
.top-panel {
  display: flex;
  justify-content: space-between;
  .search-box {
    display: flex;
    justify-content: space-between;
    :deep(.el-input-group) {
      width: 100%;
      margin-right: 20px;
    }
  }
}

.el-table {
  .el-image {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  .handle-row-btn {
    padding: 0;
  }
}
</style>