import piniaPersistConfig from "@/config/piniaPersist";
import { defineStore } from "pinia"

export const activeSetctionStore = defineStore('activeSetction', {
  state: () => {
    return {
      activeInfoCard: false,
      activeAlbum: false,
      activeLnformation: false,
      activeStudent: false,

    }
  },
  actions: {
    // 资料卡样式过渡效果
    setActiveInfoCard(is: boolean) {
      this.activeInfoCard = is;
    },
    // 相册样式过渡效果
    setActiveAlbum(is: boolean) {
      this.activeAlbum = is;
    },
    // 个人信息样式过渡效果
    setActiveLnformation(is: boolean) {
      this.activeLnformation = is;
    },
    // 学籍样式过渡效果
    setActiveStudent(is: boolean) {
      this.activeStudent = is;
    },
  },
  getters: {},
  persist: piniaPersistConfig("activeSetction")
})