<template>
  <div class="home-content">
    <header class="flex">
      <article>
        <h1>Hws Dreagreatger</h1>
        <p>Let's start showing off some magic...</p>
      </article>
    </header>
    <div class="navs">
      <nav v-show="show" class="shake">
        <li @click="navClickItem(index)" v-for="(item, index) in navObj" :key="index"
          :class="index == navItem ? 'navItemCode' : ''">{{ item }}</li>
      </nav>
      <button class="icon-btn" ref="btnRef" @click="navShow">
        <div class="icon"></div>
      </button>
    </div>
    <!-- 内容区 -->
    <my-mian></my-mian>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue-demi";
import myMian from "../components/myMian/index.vue"

const navObj = ref(["home", "资料卡", "个人信息", "相册", "学籍"])
const btnRef = ref()
const navItem = ref<number>(0)
const show = ref(true)

function navShow() {
  btnRef.value.classList.toggle("toggled")
  show.value = !show.value
}
function navClickItem(index: number) {
  // console.log(index);
  navItem.value = index
}
</script>

<style lang="scss" scoped>
$blue: rgb(33, 150, 243);

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
    background-color: rgb(0, 74, 110, .2);
    // width: 30%;
    // height: 50px;

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
      // position: absolute;
      box-sizing: border-box;
      color: white;
      font-size: 2rem;
      width: 600px;

      display: flex;
      justify-content: space-between;
      height: 80px;
      line-height: 80px;

      li {
        width: 20%;
        text-align: center;
        cursor: pointer;

        &:hover {
          border-radius: 10px;
          // background-color: rgb(240, 248, 255, .2);
          border: 3px solid rgb(0, 74, 110, .5);
        }

        &.navItemCode {
          border-radius: 10px;
          background-color: rgb(240, 248, 255, .2);
          border: 3px solid rgb(0, 74, 110, .5);
        }
      }
    }
  }

  .shake {
    animation: shake 1s;
  }

  @keyframes shake {}
}
</style>