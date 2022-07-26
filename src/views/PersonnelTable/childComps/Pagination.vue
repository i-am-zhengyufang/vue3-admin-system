<template>
  <el-config-provider :locale="locale">
    <el-pagination
      background
      :currentPage="pageNo"
      :page-size="pageSize"
      :page-sizes="[5, 10, 20]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-config-provider>
</template>

<script setup>
import { defineProps, defineEmits } from "@vue/runtime-core";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { ElConfigProvider } from "element-plus";

const locale = zhCn;
const props = defineProps(["pageNo", "pageSize", "totalNum"]);
const emit = defineEmits(["handleSizeChange", "handleCurrentChange"]);
const handleSizeChange = (val) => {
  emit("handleSizeChange", val);
};
const handleCurrentChange = (val) => {
  emit("handleCurrentChange", val);
};
</script>

<style scoped>
.el-pagination {
  margin-top: 30px;
}
</style>