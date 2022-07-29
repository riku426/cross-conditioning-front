<template>
  <div class="container">
    <div class="title">
      <div>
        <h2 class="big-sub">圧倒的な変化と感動を。</h2>
      </div>
      <div>
        <h3>
          <span class="marker">ストレッチ</span><br />と<br /><span
            class="marker"
            >コンディショニングトレーニング</span
          ><br />で身体の悩みを解決します！
        </h3>
      </div>
      <div>
        <h2 class="comp-name">CROSS CONDITIONING</h2>
      </div>
    </div>
    <div class="wrap">
      <h3>コース紹介</h3>
    </div>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide
        ><img src="@/img/test.jpeg" alt="" class="img"
      /><p class="course-detail">ストレッチに特化した施術を行い柔軟性と身体の強化を行います</p></swiper-slide>
      <swiper-slide
        ><img src="@/img/test.jpeg" alt="" class="img"
      /></swiper-slide>
      <swiper-slide
        ><img src="@/img/test.jpeg" alt="" class="img"
      /></swiper-slide>
      <!-- 追加ここから -->
      <div slot="pagination" class="swiper-pagination"></div>
      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
      <!-- ここまで -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "toppage",
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: 1.2,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 5,
      },
    };
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log("Swiper redied!", swiper);
    },
    onSwiperSlideChangeTransitionStart() {
      console.log("SwiperSlideChangeTransitionStart!");
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log("Swiper click slide!", reallyIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  font-weight: 300;
  .title {
    padding: 0.5em 1em;
    margin: auto;
    color: #474747;
    background: whitesmoke; /*背景色*/
    border-left: double 7px #4ec4d3; /*左線*/
    border-right: double 7px #4ec4d3; /*右線*/
    position: relative;
    z-index: 1;
    width: auto;
    height: 300px;
    background-image: url("@/img/test_2.jpeg");
    background-position: center;
    background-size: cover;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    background-blend-mode: lighten;

    .big-sub {
      color: black;
      font-weight: 600;
      display: inline-block;
      background: linear-gradient(transparent 85%, rgb(247, 128, 128) 80%);
    }
    h3 {
      font-size: 13px;
    }
    .marker {
      font-size: 20px;
      color: black;
    }
    .comp-name {
      background: linear-gradient(
        transparent 30%,
        rgba(247, 198, 104, 0.2) 30%,
        rgb(248, 248, 247) 65%,
        rgba(247, 198, 104, 0.2)
      );
      color: black;
      font-weight: bold;
      font-family: "Noto Sans", sans-serif;
    }
  }
  .wrap {
    margin: 50px 0 0 20px;
    text-align: left;
    .description {
      .marker {
        color: red;
        font-size: 20px;
      }
    }
  }
  .swiper {
    width: 75%;
  }
  .img {
    width: 100%;
    height: auto;
  }
}
.swiper-container {
  height: 250px;
  width: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-left:5px solid #fff;
  .course-detail {
    padding-right: 10px;
  }
}
.swiper-button-prev {
  left: 0;
}
</style>
