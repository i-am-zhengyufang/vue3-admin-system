<template>
  <div class="card">
    <el-button @click="showErr = true">点击模拟一个错误</el-button>
    <el-button @click="showErr2 = true">点击模拟另一个错误</el-button>

    <div v-if="showErr">
      {{ aa.aaa }}
    </div>
    <div v-if="showErr2">{{ fun() }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showErr = ref(false);
const showErr2 = ref(false);
</script>

<style>
</style>