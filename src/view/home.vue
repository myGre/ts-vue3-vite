<template>
  <div class="home-content">
    <mySnow :navIndex="index"></mySnow>
    <!-- <header>
      <div class="img">
        <img src="" alt="">
      </div>
    </header> -->
    <div class="content">
      <div class="content-box" :style="activeBgColor">
        <!-- 头像 -->
        <div class="author">
          <div class="author-img">
          </div>
        </div>
        <!-- 导航 -->
        <myNav ref="myNavRef" @navItemEnvent="navItemEnvent"></myNav>
        <!-- tab栏 -->
        <div class="informationCard">
          <!-- 个人信息栏 -->
          <div class="userInformation"></div>
          <!-- 技能 -->
          <div class="technology"></div>
          <!-- 资料 -->
          <div class="myInformation">
            <myCard></myCard>
          </div>
          <!-- 相册 -->
          <div class="images"></div>
        </div>
        <!-- 资料卡 -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import mySnow from "@/components/mySnow.vue"
import myNav from "@/components/myNav.vue";
import myCard from "@/components/myCard/index.vue"
import { computed, onMounted, ref, watch } from "vue-demi";

const myNavRef = ref()
const bgColorsBody = ref(["rgb(153, 153, 251, .4)", "rgb(255, 150, 189, .4)", "rgb(255, 231, 151, .4)",
  "rgb(207, 255, 241, .4)"])

// 当前背景颜色
const index = ref(0)
const activeBgColor = computed(() => {
  return `background-color: ${bgColorsBody.value[index.value]}`
})
function navItemEnvent(i: number) {
  index.value = i
}
</script>

<style lang="scss" scoped>
.home-content {
  width: 100%;
  height: 2000px;

  // background-color: rgb(255, 255, 255);
  header {
    // height: 300px;
    // width: 80%;
    // margin: 0 auto;
    // background-color: rgb(202, 202, 202);

    img {
      // width: 1024px;
      // height: 00px;
    }
  }

  .content {
    width: 100%;
    height: 2000px;
    position: relative;
    top: -2000px;

    .content-box {
      box-sizing: border-box;
      width: 80%;
      height: 1700px;
      margin: 0 auto;
      padding: 15px;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      // box-shadow: 4px 4px 7px rgb(0 0 0 / 20%);
      // background-color: rgba(255, 255, 255, 0.2);

      .author {
        display: flex;
        flex-direction: row;

        .author-img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          // text-align: center;
          background-color: rgb(240, 248, 255, 0.3);
        }
      }

      .informationCard {
        display: flex;
        flex-direction: column;

        .userInformation {
          width: 100%;
          height: 300px;
          background-color: rgb(77, 77, 77);
        }

        // .technology {
        //   width: 100%;
        //   height: 300px;
        //   background-color: rgb(163, 138, 105);
        // }

        // .myInformation {
        //   width: 100%;
        //   height: 300px;
        //   background-color: rgb(87, 59, 23);
        // }

        // .images {
        //   width: 100%;
        //   height: 300px;
        //   background-color: rgb(102, 102, 102);
        // }
      }
    }
  }
}
</style>