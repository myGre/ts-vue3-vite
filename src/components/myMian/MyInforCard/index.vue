<template>
  <section class="setction">
    <div class="main_section">
      <div class="movie_content" v-if="isCardOrDetail">
        <div class="movie" @click.prevent="boxDetail">
          <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-room.jpg?raw=true" alt=""
            class="poster" />
          <h3 class="title">Room</h3>
          <!-- <div class="desc">
          Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it
          are
          the only real things in the world. But what will happen when his Ma suddenly tells him that there are other
          things outside of Room?
        </div> -->
        </div>
        <div class="movie">
          <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-whiplash.jpg?raw=true" alt=""
            class="poster" />
          <h3 class="title">Whiplash</h3>
          <!-- <div class="desc">
          Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any
          cost,
          even his humanity.
        </div> -->
        </div>
        <div class="movie">
          <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-madmax.jpg?raw=true" alt=""
            class="poster" />
          <h3 class="title">Mad Max</h3>
          <!-- <div class="desc">
          An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is
          broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels
          on
          the run who just might be able to restore order. There's Max, a man of action and a man of few words, who
          seeks
          peace of mind following the loss of his wife and child in the aftermath of the chaos.
        </div> -->
        </div>
        <div class="movie">
          <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-therevenant.jpg?raw=true" alt=""
            class="poster" />
          <h3 class="title">The Revenant</h3>
          <!-- <div class="desc">
          In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead
          after a bear mauling.
        </div> -->
        </div>
      </div>
      <div class="detail_section" v-else>
        <!-- <svg class="close">
          <use xlink:href="#close"></use>
        </svg> -->
        <div class="movie">
          <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-room.jpg?raw=true" alt=""
            class="poster" />
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
import { ref } from 'vue';


const isCardOrDetail = ref(true)

function boxDetail() {
  isCardOrDetail.value = false
}
function cancel() {
  isCardOrDetail.value = true
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
      height: 80%;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: rgb(46, 85, 46, .2);
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      text-align: center;

      .movie {
        .title {
          margin-top: -70px;
          opacity: .5;
        }

        .poster {
          width: 80%;
          border-radius: 15px;
          opacity: .8;
        }
      }
    }

    .detail_section {
      position: absolute;
      width: 80%;
      height: 80%;
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
          // top: -30px;
          left: -30px;
        }

        .detail_text {
          position: absolute;
          left: 31.5%;
          // top: -30px;
          // height: 100%;
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
  }
}
</style>