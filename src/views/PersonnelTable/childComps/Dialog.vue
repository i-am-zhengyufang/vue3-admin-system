<template>
  <el-dialog :model-value="isShow" title="编辑" @close="handleCancel">
    <el-form ref="formRef" label-width="120px" :model="form" :rules="rules">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="地址" prop="addr">
        <el-cascader
          placeholder="选择一个地址"
          :options="regionData"
          v-model="form.addr"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="form.status" placeholder="选择一个状态">
          <el-option label="未启用" value="未启用" />
          <el-option label="正常启用" value="正常启用" />
          <el-option label="禁用" value="禁用" />
        </el-select>
      </el-form-item>
      <el-form-item label="金额" prop="balance">
        <el-input
          v-model.number="form.balance"
          autocomplete="off"
          placeholder="请输入金额"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from "vue";
import { regionData, CodeToText } from "element-china-area-data";
const props = defineProps({
  isShow: {
    type: Boolean,
  },
  form: {
    type: Object,
  },
});
const emit = defineEmits(["updatePersonnelList", "update:isShow"]);

const formRef = ref(null);

const rules = reactive({
  name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  addr: [{ required: true, message: "请选择地址", trigger: "change" }],
  status: [{ required: true, message: "请选择状态", trigger: "change" }],
  balance: [
    { required: true, message: "请输入金额" },
    { type: "number", message: "金额必须是数字" },
  ],
});

const handleCancel = () => {
  emit("update:isShow", false);
  formRef.value.resetFields();
};

const handleConfirm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      props.form.addr = props.form.addr.map(
        (item) => (item = CodeToText[item])
      );

      emit("updatePersonnelList", props.form);
      handleCancel();
    } else {
      ElNotification.error({
        message: "信息填写不完整或有误",
        showClose: false,
      });
    }
  });
};
</script>

<style>
</style>