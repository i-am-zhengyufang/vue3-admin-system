<template>
  <div class="login-box-wrap">
    <div class="login-box">
      <h1>admin-<span>manager-system</span></h1>
      <el-form @submit.prevent
        ><!-- 阻止type为submit的按钮默认提交行为 -->
        <el-form-item class="inputbox">
          <input
            type="text"
            required=""
            v-model="username"
            placeholder="用户名"
          />
        </el-form-item>
        <el-form-item class="inputbox">
          <input
            type="password"
            required=""
            v-model="password"
            placeholder="密码"
            autocomplete
          />
        </el-form-item>
        <el-form-item>
          <input
            type="submit"
            value="登录"
            @click="handleSubmit"
            class="submit-btn"
          />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
const handleSubmit = () => {
  if (username.value !== "" && password.value !== "") {
    ElMessage.success("登录成功");
    localStorage.setItem("username", username.value);
    router.push("/home");
  }
};
</script>

<style lang="scss" scoped>
.login-box-wrap {
  height: 100vh;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("assets/images/login-bgc.jpg") no-repeat center center;
    filter: blur(3px);
    z-index: -1;
    background-size: cover;
  }
  .login-box {
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    padding: 40px;
    h1 {
      font-size: 20px;
      color: #ca2a14;
      margin-right: 30px;
      span {
        color: #778ad4;
      }
    }
    .inputbox {
      input {
        color: #fff;
        border: 1px solid #fff;
        width: 200px;
        height: 30px;
      }
      ::-webkit-input-placeholder {
        color: #e5ddcd;
      }
    }
    .submit-btn {
      width: 200px;
      height: 25px;
      border: 1px solid #fff;
      color: #a18d6c;
      background-color: #fff;
      &:hover {
        background-color: #efece6;
        border-color: #fff;
      }
    }
  }
}
</style>