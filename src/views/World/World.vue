<template>
  <div class="card">
    <el-select v-model="mode" placeholder="Select" @change="changeMode">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <div class="list">
      <p>{{ $t("p1") }}</p>
      <p>{{ $t("p2") }}</p>
      <p>{{ $t("p3") }}</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
const { locale } = useI18n();
const mode = ref("zh-cn"); //绑定value，不是label
const changeMode = (value) => {
  locale.value = value;
};
const options = [
  {
    value: "zh-cn",
    label: "简体中文",
  },
  {
    value: "en",
    label: "English",
  },
  {
    value: "ja",
    label: "日本語",
  },
];
</script>

<style lang="scss" scoped>
.list {
  p {
    margin: 20px 20px 20px 0;
    font-size: $font-large-size;
  }
}
</style>