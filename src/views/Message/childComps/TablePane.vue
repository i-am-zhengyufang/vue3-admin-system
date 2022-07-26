<template>
  <el-table :data="props.msg" :show-header="false">
    <el-table-column>
      <template #default="{ row }">
        <!-- 等价于 #default="scope" 然后{{scope.row.title}}-->
        <span class="message-title">{{ row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="date" width="180"></el-table-column>
    <el-table-column width="120">
      <template #default="scope">
        <el-button
          size="small"
          @click="handleClick(scope.$index)"
          :type="type === 'read' ? 'danger' : ''"
          >{{ text.rightText }}</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-button
    class="all-btn"
    :type="type == 'unread' ? 'success' : 'danger'"
    @click="handleClickAll"
  >
    {{ text.bottomText }}
  </el-button>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

const props = defineProps(["type", "msg"]);
const emit = defineEmits(["handleClick", "handleClickAll"]);
const text = reactive({
  rightText: "",
  bottomText: "",
});
switch (props.type) {
  case "unread":
    text.rightText = "标为已读";
    text.bottomText = "全部标为已读";
    break;
  case "read":
    text.rightText = "删除";
    text.bottomText = "删除全部";
    break;
  case "recycle":
    text.rightText = "还原";
    text.bottomText = "清空回收站";
    break;
}

const handleClick = (index) => {
  emit("handleClick", { type: props.type, index });
};

const handleClickAll = () => {
  emit("handleClickAll", props.type);
};
</script>

<style lang="scss" scoped>
.el-table {
  :deep(.el-table__cell) {
    padding: 20px 0 !important;
  }
}
.all-btn {
  margin-top: 30px;
}
</style>