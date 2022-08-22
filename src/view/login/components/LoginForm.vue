<template>
  <el-card>
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" class="demo-loginForm">
      <el-form-item prop="username">
        <el-input v-model.number="loginForm.username" placeholder="用户名：admin" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="密码：123456" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(loginFormRef)">确定</el-button>
        <el-button @click="resetForm(loginFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { loginApi } from '@/api/modules/login';
import { GlobalStore } from "@/stores/index"
import { useRouter } from 'vue-router';
import { Login } from '@/api/interface';
import md5 from "js-md5";

const router = useRouter()
const globalState = GlobalStore()
const loginFormRef = ref<FormInstance>()

const loginForm = reactive<Login.ReqLoginForm>({
  username: '',
  password: "",
})

const rules = reactive({
  password: [{ min: 2, max: 10, message: 'Length should be 2 to 10', trigger: 'blur' }],
  username: [{ min: 2, max: 10, message: 'Length should be 2 to 10', trigger: 'blur' }],

})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      const requestLoginForm: Login.ReqLoginForm = {
        username: loginForm.username,
        password: md5(loginForm.password)
      }
      loginApi(requestLoginForm).then(res => {
        console.log(res);
        globalState.setToken(res.data!.access_token)
        ElMessage.success("登录成功")
        router.push({ name: "home" })
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>
