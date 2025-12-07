<template>
   <div class="tabbar">
      <div class="left">
         <el-icon :size="22" class="expand_icon" @click="changeExpand">
            <component :is="layoutsettingStore.isExpand?'Expand':'Fold'"></component>
         </el-icon>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in $route.matched" v-show="item.meta.title!='layout'">
               <div class="bread_item">
                  <el-icon size="18">
                     <component :is="item.meta.icon"></component>
                  </el-icon>
                  <span style="margin-left:5px">{{ item.meta.title }}</span>
               </div>
            </el-breadcrumb-item>
         </el-breadcrumb>
      </div>
      <div class="right">
         <el-button icon="Refresh" circle @click="refresh"></el-button>
         <el-button v-show="!isFullscreen" icon="FullScreen" circle @click="changeFullscreen">
         </el-button>
         <el-button v-show="isFullscreen" circle @click="changeFullscreen">
            <svg-icon slot="icon" name="exit-full" :svgStyle="{width:'18px',height:'18px'}"></svg-icon>
         </el-button>
         <el-button icon="Setting" circle></el-button>
         <el-avatar class="avatar" :src="userStore.userInfo?.avatar"></el-avatar>
         <el-dropdown class="dropDown-box" placement="bottom-end" @command="handleCommand">
            <span class="user_Info">
               欢迎您，{{userStore.userInfo?.name}}
               <el-icon class="icon--right">
               <arrow-down />
               </el-icon>
            </span>
            <template #dropdown>
               <el-dropdown-menu>
               <el-dropdown-item command="exitLogin">退出登录</el-dropdown-item>
               </el-dropdown-menu>
            </template>
         </el-dropdown>
      </div>
   </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import useLayoutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user'
import { useRouter,useRoute } from 'vue-router';
let $router = useRouter()
let $route = useRoute()
let layoutsettingStore = useLayoutSettingStore()
let userStore = useUserStore()
const isFullscreen = ref(false)
function changeExpand(){
   layoutsettingStore.isExpand = !layoutsettingStore.isExpand
}
function changeFullscreen(){
   let full = document.fullscreenElement;//document对象的一个属性，判断当前是否全屏，全屏是ture，非全屏false
   //切换全屏
   if(!full){
      document.documentElement.requestFullscreen()
      isFullscreen.value = true
   }else{
      document.exitFullscreen()
      isFullscreen.value = false
   }
}
function refresh(){
   layoutsettingStore.refresh = !layoutsettingStore.refresh
}
async function handleCommand(command:string){
   if(command == 'exitLogin'){
      await userStore.exitLogin()
      $router.push({path:'/login',query:{redirect:$route.path}})
   }
}
</script>
<style scoped lang='scss'>
.tabbar{
   width: 100%;
   height: 100%;
   // background: #ccc;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid #ccc;
   .left{
      display: flex;
      align-items: center;
      padding-left: 10px;
      .expand_icon{
         cursor:pointer;
         margin-right:20px
      }
      .bread_item{
         display: flex;
         align-items: center;
         cursor: pointer;
      }
   }
   .right{
      display: flex;
      align-items: center;
      .avatar{
         margin:0 15px 0 25px;
      }
      .user_Info{
         cursor: pointer;
         .icon--right{
            position: relative;
            top: 1px;
         }
      }
      .dropDown-box{
         margin-right: 10px;
      }
   }
   
}
</style>