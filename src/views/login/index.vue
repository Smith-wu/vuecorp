<template>
   <div class="login_container">
      <el-row>
         <el-col :span="12" :xs="0"></el-col>
         <el-col :span="12" :xs="24">
            <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginFormRef">
               <h1>Hello</h1>
               <h2>欢迎来到硅谷甄选</h2>
               <el-form-item prop="username">
                  <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
               </el-form-item>
               <el-form-item prop="password">
                  <el-input :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
               </el-form-item>
               <el-form-item>
                  <el-button :loading="loading" type="primary" size="default" class="login_btn" @click="login">登录</el-button>
               </el-form-item>
            </el-form>
         </el-col>
      </el-row>
   </div>
</template>
<script setup lang='ts'>
import {User,Lock} from '@element-plus/icons-vue'
import {reactive,ref} from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter,useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/times'
//获取路由器
let $router = useRouter()
let $route = useRoute()
let userStore = useUserStore()
let loginForm = reactive({username:'admin',password:'123456'})
let loading = ref(false)
let loginFormRef = ref()
const login = (async ()=>{

   //表单校验
   await loginFormRef.value.validate()


   //点击登录--通知用户发请求
   //请求成功--》到首页
   //请求失败 --》展示错误信息
   loading.value = true
   try{
      await userStore.userLogin(loginForm)
      await userStore.getUserInfo()
      let redirect:any = $route.query.redirect
      $router.push({path:redirect||'/'})
      ElNotification({
         type:'success',
         message:'欢迎回来',
         title:'Hi,'+getTime()+'好'
      })
      loading.value = false
   }catch(error){
      ElNotification({
         type:'error',
         message:(error as Error).message
      })
      loading.value = false
   }
   
})

const rules = {
   username:[{
      require:'true',min:5,max:10,message:'账号长度6位到10位',trigger:'change'
   }],
   password:[{
      require:'true',min:6,max:10,message:'密码长度6位到10位',trigger:'change'
   }]
}
</script>
<style scoped lang='scss'>
.login_container{
   width: 100%;
   height: 100vh;
   background: url('@/assets/images/background.jpg') no-repeat;
   background-size: cover;
   .login_form{
      width:80%;
      position: relative;
      top: 30vh;
      background: url('@/assets/images/login_form.png') no-repeat;
      background-size: cover;
      padding: 30px;
      h1{
         color: #fff;
         font-size: 40px;
      }
      h2{
         font-size: 20px;
         color: #fff;
         margin: 20px 0;
      }
      .login_btn{
         width: 100%;
      }
   }
}
</style>