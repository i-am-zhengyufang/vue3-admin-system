<template>
  <div class="personnel">
    <my-table
      :list="list"
      @handle-add="handleAdd"
      @handle-edit="handleEdit"
      @handle-delete="deletePersonnelList"
      @handle-batch-delete="batchdeletePersonnelList"
      @handle-query="searchQuery"
    ></my-table>

    <my-pagination
      :page-no="pageNo"
      :page-size="pageSize"
      :total-num="totalNum"
      @handle-size-change="handleSizeChange"
      @handle-current-change="handleCurrentChange"
    ></my-pagination>
    <!-- 编辑框 -->
    <my-dialog
      v-model:is-show="isShowEdit"
      :form="form"
      @update-personnel-list="updatePersonnelList"
    ></my-dialog>
    <my-dialog
      v-model:is-show="isShowAdd"
      :form="form"
      @update-personnel-list="addPersonnelList"
    ></my-dialog>
  </div>
</template>

<script setup>
import myTable from "./childComps/Table.vue";
import myPagination from "./childComps/Pagination.vue";
import myDialog from "./childComps/Dialog.vue";

import usePersonnelList from "@/composables/usePersonnelList";

import { ref, reactive, toRefs } from "@vue/runtime-core";

const isShowEdit = ref(false);
const isShowAdd = ref(false);

const form = reactive({
  id: "",
  name: "",
  addr: [],
  status: "",
  balance: "",
});

const {
  personnelObj,
  handleSizeChange,
  handleCurrentChange,
  updatePersonnelList,
  addPersonnelList,
  deletePersonnelList,
  batchdeletePersonnelList,
  searchQuery,
} = usePersonnelList();

const { pageNo, pageSize, totalNum, list } = toRefs(personnelObj);

const handleEdit = (row) => {
  isShowEdit.value = true;
  // 初始化对话框里的value值，emmm其实那个reset表单好像就没意义了
  Object.keys(form).map((key) => {
    // mockjs生成的地址和regionData的不一样，不太好匹配，只能通过修改对话框改变表格，反之表格无法默认对话框
    if (key !== "addr") form[key] = row[key];
  });
};

const handleAdd = () => {
  isShowAdd.value = true;
};
</script>

<style lang="scss" scoped>
.personnel {
  background-color: #fff;
  padding: 20px;
  .btn-box {
    margin-bottom: 20px;
    .text {
      margin-left: 5px;
    }
  }
}
</style>