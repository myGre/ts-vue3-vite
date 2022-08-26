<template>
  <div class="home-content">
    <header class="flex" @mousemove="onMove()">
      <article>
        <h1>Hws Dreagreatger</h1>
        <p>Let's start showing off some magic...</p>
      </article>
    </header>
    <div class="navs">
      <nav :class="{ 'shake': show }">
        <li @click="navClickItem(index)" v-for="(item, index) in navObj" :key="index"
          :class="index == navItem ? 'navItemCode' : ''">{{ item }}</li>
      </nav>
      <button class="icon-btn" ref="btnRef" @click="navShow">
        <div class="icon"></div>
      </button>
    </div>
    <!-- 内容区 -->
    <my-mian ref="myMianRef"></my-mian>
    <!-- 可视化页面底部翻页图标 -->
    <div class="bounce-1" v-show="isBounce"></div>
    <!-- footer -->
    <footer>
      <!-- 1756554@ccc.com -->
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue-demi";
import myMian from "../components/myMian/index.vue"
import { useScroll } from "@/hooks/useScroll";

// hooks
const { listenerFunction, isBounce } = useScroll()

const navObj = ref(["home", "资料卡", "个人信息", "相册", "学籍"])
const btnRef = ref()
const myMianRef = ref() // mymain组件
const navItem = ref<number>(0) // 当前导航
const show = ref(false) // 是否显示页面底部翻页图标
// 触发鼠标移动事件
function onMove() {
  // console.log(el);
  listenerFunction()
}

function navShow() {
  btnRef.value.classList.toggle("toggled")
  show.value = !show.value
}
function navClickItem(index: number) {
  // console.log(index);
  navItem.value = index
}

onMounted(() => {
  // console.log(myMianRef.value);

})

</script>

<style lang="scss" scoped>
$blue: rgb(7, 95, 167);

.home-content {
  width: 100%;
  overflow-x: hidden;
  position: relative;

  // 头部
  header {
    width: 100vw;
    min-height: 400px;
    height: 100vh;
    background: #03293c;
    color: white;

    font-weight: bold;
    text-align: left;

    article {
      padding-right: 50%;
      width: 30%;
      float: left;

      h1 {
        font-size: 9rem;
        margin: 0 0 2.5rem;
        line-height: 1em;
      }

      p {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }
  }

  // 导航栏
  .navs {
    position: absolute;
    top: 100px;
    right: 60px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    height: 80px;

    .icon-btn {
      position: relative;
      ;
      top: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      height: 60px;
      outline: none;
      padding: 0;
      width: 80px;

      &.toggled {
        .icon {
          background-color: transparent;

          &:before {
            top: 0px;
            transform: rotate(-45deg);
          }

          &:after {
            bottom: 0px;
            transform: rotate(45deg);
          }
        }
      }
    }

    .icon {
      background-color: $blue;
      border-radius: 80px;
      height: 10px;
      position: relative;
      transition: all 0.25s;
      width: 80px;

      &:before,
      &:after {
        background-color: $blue;
        border-radius: 80px;
        content: "";
        height: 10px;
        left: 0px;
        position: absolute;
        z-index: 0;
        transition: all 0.25s;
        width: 80px;
      }

      &:before {
        top: -30px;
      }

      &:after {
        bottom: -30px;
      }
    }

    nav {
      box-sizing: border-box;
      color: white;
      font-size: 2rem;
      width: 0px;
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      height: 80px;
      line-height: 80px;
      opacity: 0;
      transition: all 1s ease;

      li {
        width: 15%;
        text-align: center;
        cursor: pointer;

        &:hover {
          border-radius: 10px;
          border: 3px solid rgb(0, 74, 110, .5);
        }

        &.navItemCode {
          border-radius: 10px;
          background-color: rgb(240, 248, 255, .2);
          border: 3px solid rgb(0, 74, 110, .5);
        }
      }

      &.shake {
        width: 600px;
        opacity: 1;
      }
    }
  }

  // 下翻图标
  .bounce-1 {
    width: 40px;
    height: 40px;
    position: fixed;
    // bottom: 80px;
    left: 50%;
    border-bottom: 3px solid rgba(255, 255, 255, 0.2);
    border-right: 3px solid rgba(255, 255, 255, 0.2);
    margin-left: -20px;
    transform: translateY(0%) rotate(45deg);
    animation: bounce-1 3s infinite normal;

    &:before {
      content: "";
      position: absolute;
      top: -20px;
      left: -20px;
      width: 40px;
      height: 40px;
      border-bottom: 3px solid rgba(255, 255, 255, 0.2);
      border-right: 3px solid rgba(255, 255, 255, 0.2);
    }

    &::after {
      content: "";
      position: absolute;
      top: 20px;
      left: 20px;
      width: 40px;
      height: 40px;
      border-bottom: 3px solid rgba(255, 255, 255, 0.2);
      border-right: 3px solid rgba(255, 255, 255, 0.2);
    }
  }

  // .bounce-2 {
  //   width: 40px;
  //   height: 40px;
  //   position: fixed;
  //   bottom: 50px;
  //   left: 50%;
  //   border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  //   border-right: 3px solid rgba(255, 255, 255, 0.2);
  //   margin-left: -20px;
  //   transform: translateY(0%) rotate(45deg);
  // }

  // .bounce-3 {
  //   width: 40px;
  //   height: 40px;
  //   position: fixed;
  //   bottom: 20px;
  //   left: 50%;
  //   border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  //   border-right: 3px solid rgba(255, 255, 255, 0.2);
  //   margin-left: -20px;
  //   transform: translateY(0%) rotate(45deg);
  // }
}

@keyframes bounce-1 {
  0% {
    opacity: 0;
    bottom: 80px;
  }

  100% {
    opacity: 1;
    bottom: 40px;
    // border-bottom: 2px solid rgb(226, 226, 226, .5);
    // border-right: 2px solid rgb(226, 226, 226, .5);
  }
}
</style>