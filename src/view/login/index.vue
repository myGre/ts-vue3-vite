<template>
  <div class="login-content">
    <div class="login-form">
      <LoginForm class="login" ref="loginRef" />
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
// import SwitchDark from "@/components/SwitchDark/index.vue";
import LoginForm from "./components/LoginForm.vue";
</script>

<style scoped lang="scss">
.login-content {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}

@import "./index.scss";
</style>
