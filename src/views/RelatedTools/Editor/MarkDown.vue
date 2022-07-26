<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<script setup>
import { ref } from "vue";

import VMdEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";

// highlightjs

import hljs from "highlight.js/lib/core";

import json from "highlight.js/lib/languages/json";

hljs.registerLanguage("json", json);

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

let text = ref("hello world");
</script>

<style>
</style>