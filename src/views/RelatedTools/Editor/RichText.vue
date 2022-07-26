<template>
  <vue3-tinymce v-model="state.content" :setting="state.setting" />
</template>

<script setup>
import Vue3Tinymce from "@jsdawn/vue3-tinymce";
import { reactive } from "vue";
const state = reactive({
  content: "hello world!",
  // editor 配置项
  setting: {
    height: 500,
    toolbar:
      "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
    toolbar_drawer: "sliding",
    quickbars_selection_toolbar:
      "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
    plugins: "link image media table lists fullscreen quickbars",
    fontsize_formats: "12px 14px 16px 18px",
    default_link_target: "_blank",
    link_title: false,
    nonbreaking_force_tab: true,
    language: "zh_CN",
    language_url:
      "https://unpkg.com/@jsdawn/vue3-tinymce@1.1.6/dist/tinymce/langs/zh_CN.js",
  },
});
</script>

<style>
</style>