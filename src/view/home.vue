<template>
  <div class="home-content">
    <mySnow></mySnow>
    <!-- <header>
      <div class="img">
        <img src="" alt="">
      </div>
    </header> -->
    <div class="content">
      <div class="content-box">
        <div class="author">
          <div class="author-img">
          </div>
        </div>
        <!-- <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </nav> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import mySnow from "@/components/mySnow.vue"
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
    margin-top: 30px;
    width: 100%;
    height: 2000px;
    position: relative;
    top: -2000px;

    .content-box {
      box-sizing: border-box;
      width: 80%;
      height: 2000px;
      margin: 0 auto;
      padding: 15px;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      // box-shadow: 4px 4px 7px rgb(0 0 0 / 20%);
      background-color: rgba(255, 255, 255, 0.2);

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
    }
  }
}
</style>