<template>
  <div v-if="errorStore.errorLogsNum > 0" class="bug-badge">
    <el-badge
      :value="errorStore.errorLogsNum"
      @click="dialogTableVisible = true"
    >
      <el-button type="danger">
        <iconpark-icon name="bug"></iconpark-icon>
      </el-button>
    </el-badge>
    <el-dialog v-model="dialogTableVisible" title="异常监控" width="90%">
      <el-table :data="errorLogs" tooltip-effect="light">
        <el-table-column label="报错路由" width="320" show-overflow-tooltip>
          <template #default="{ row }">
            <el-tag type="success">{{ row.url }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="错误详情" width="400" show-overflow-tooltip>
          <template #default="{ row }">
            <el-tag type="danger">{{ row.err }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <a
              v-for="(item, index) in searchWays"
              :key="index"
              :href="item.url + encodeURI(row.err)"
              target="_blank"
            >
              <el-button type="primary" class="search-btn">
                <iconpark-icon name="search"></iconpark-icon>
                {{ item.title }}
              </el-button>
            </a>
          </template>
        </el-table-column>
      </el-table>
      <template #footer>
        <el-button @click="dialogTableVisible = false">取消</el-button>
        <el-button type="primary" @click="hiddenErr">暂不显示</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useErrorStore } from "@/store";
import { storeToRefs } from "pinia";
const errorStore = useErrorStore();
const { clearErrorLogs } = errorStore;
const { errorLogs } = storeToRefs(errorStore);
const dialogTableVisible = ref(false);

const hiddenErr = () => {
  dialogTableVisible.value = false;
  clearErrorLogs();
};
const searchWays = [
  {
    title: "百度搜索",
    url: "https://www.baidu.com/baidu?wd=",
  },
  {
    title: "bing搜索",
    url: "https://cn.bing.com/search?q=",
  },
  {
    title: "谷歌搜索",
    url: "https://www.google.com/search?q=",
  },
];
</script>

<style lang="scss" scoped>
.bug-badge {
  margin-left: 20px;
  .search-btn {
    margin-right: 10px;
  }
}
</style>