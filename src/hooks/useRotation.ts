import { ref } from "vue";
import MyHome from "@/components/myMian/MyHome/index.vue"; // home首页
import MyInforCard from "@/components/myMian/MyInforCard/index.vue"; // 资料卡
import MyLnformation from "@/components/myMian/MyLnformation/index.vue"; // 个人信息
import MyAlbum from "@/components/myMian/MyAlbum/index.vue"; // 相册
import MyStudent from "@/components/myMian/MyStudent/index.vue"; // 学籍

export default function useRotation() {

  const currentComponent = ref(MyHome) // 当前组件
  const currentNav = ref(0) // 当前导航，默认0
  function btnClick() {
    if (currentNav.value < 3) {
      currentNav.value++
    }
  }
  return {
    btnClick,
    currentComponent,
    currentNav
  }
}