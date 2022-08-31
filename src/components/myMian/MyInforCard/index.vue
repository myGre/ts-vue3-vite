<template>
  <section class="setction">
    <div class="main_section">
      <div class="movie_content" :style="isCardOrDetail ? `opacity: 1;` : `opacity: 0;`">
        <div class="movie" @click.prevent="boxDetail($event, index)" v-for="(item, index) in contentArr" :key="index">
          <div class="poster" :style="`background: url(${item.src})`">
            <!-- <img :src="item.src" alt="" /> -->
          </div>
          <h3 class="title">{{  item.title  }}</h3>
          <!-- <div class="desc">
        </div> -->
        </div>
      </div>
      <div class="detail_section" :style="detail_show">
        <div class="movie">
          <div class="poster">
            <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-room.jpg?raw=true" alt="" />
          </div>
          <div class="detail_text">
            <div class="cancel" @click="cancel">X</div>
            <h3 class="title">Room</h3>
            <!-- <div class="info">
              <span class="length">117 min</span>
              <span class="year">2015</span>
            </div> -->
            <p class="desc">
              Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within
              it
              are the only real things in the world. But what will happen when his Ma suddenly tells him that there are
              other things outside of Room?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const contentArr = [
  {
    src: 'https://github.com/supahfunk/supah-codepen/blob/master/.jpg?raw=true',
    title: 'Room',
    desc:
      `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it
  are
  the only real things in the world. But what will happen when his Ma suddenly tells him that there are other
  things outside of Room?`
  },
  {
    src: 'https://github.com/supahfunk/supah-codepen/blob/master/movie-whiplash.jpg?raw=true',
    title: 'Room',
    desc:
      `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it
  are
  the only real things in the world. But what will happen when his Ma suddenly tells him that there are other
  things outside of Room?`
  },
  {
    src: 'https://github.com/supahfunk/supah-codepen/blob/master/movie-madmax.jpg?raw=true',
    title: 'Room',
    desc:
      `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it
  are
  the only real things in the world. But what will happen when his Ma suddenly tells him that there are other
  things outside of Room?`
  },
  {
    src: 'https://github.com/supahfunk/supah-codepen/blob/master/movie-therevenant.jpg?raw=true',
    title: 'Room',
    desc:
      `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it
  are
  the only real things in the world. But what will happen when his Ma suddenly tells him that there are other
  things outside of Room?`
  },
]

const isCardOrDetail = ref(false)

// 显示或隐藏详情弹窗
const detail_show = computed(() => {
  return isCardOrDetail.value ? `display: block` : ''
})

function boxDetail(el: any, index: number) {
  console.log(el);
  console.log(index);

  isCardOrDetail.value = true
}
function cancel() {
  isCardOrDetail.value = false
}
</script>

<style lang="scss" scoped>
@import "./index.scss";

.setction {

  .main_section {
    width: 100%;
    height: 100%;
    background-color: rgb(167, 167, 167, .5);
    // text-align: center;
    position: relative;

    .movie_content {
      position: absolute;
      width: 80%;
      height: 60%;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: rgb(46, 85, 46, .2);
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      text-align: center;
      transition: all .4s cubic-bezier(.67, .13, .1, .81);

      .movie {

        .title {
          // margin-top: -70px;
          // opacity: .5;
        }

        .poster {
          width: 90%;
          margin: 0 auto;

          img {
            // width: 80%;
            width: 100%;
            border-radius: 15px;
            opacity: .8;
          }
        }
      }
    }

    .detail_section {
      display: none;
      position: absolute;
      width: 80%;
      height: 60%;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: rgb(46, 85, 46, .2);

      // display: flex;
      // justify-content: space-around;
      // text-align: center;
      .movie {
        display: flex;
        justify-content: space-between;
        position: relative;

        .poster {
          width: 35%;
          border-radius: 15px;
          position: absolute;
          top: -30px;
          left: -30px;

          img {
            width: 80%;
            border-radius: 15px;
          }
        }

        .detail_text {
          position: absolute;
          left: 32.5%;
          // top: -30px;
          background-color: rgb(46, 85, 46, .2);
          padding: 30px;

          .cancel {
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
          }

          .desc {
            text-indent: 2em;
          }
        }
      }
    }

    // .ativce {
    //   display: block;
    //   position: absolute;
    //   width: 80%;
    //   height: 60%;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate3d(-50%, -50%, 0);
    //   background-color: rgb(46, 85, 46, .2);

    //   .movie {
    //     display: flex;
    //     justify-content: space-between;
    //     position: relative;

    //     .poster {
    //       width: 35%;
    //       border-radius: 15px;
    //       position: absolute;
    //       top: -30px;
    //       left: -30px;

    //       img {
    //         width: 100%;
    //         border-radius: 15px;
    //       }
    //     }

    //     .detail_text {
    //       position: absolute;
    //       left: 32.5%;
    //       // top: -30px;
    //       background-color: rgb(46, 85, 46, .2);
    //       padding: 30px;

    //       .cancel {
    //         position: absolute;
    //         right: 20px;
    //         top: 20px;
    //         cursor: pointer;
    //       }

    //       .desc {
    //         text-indent: 2em;
    //       }
    //     }
    //   }
    // }
  }
}

@keyframes detail {}
</style>