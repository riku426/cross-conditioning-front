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
    <div class="worry_example">
      <h3>こんな悩みありませんか？</h3>
      <ul>
        <li>最近運動不足で体が重い</li>
        <li>食事制限しているけど痩せられない</li>
        <li>筋力トレーニングが続けられない</li>
      </ul>
    </div>
    <div class="wrap">
      <h3>コース紹介</h3>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          ><p>ストレッチ</p>
          <img src="@/img/test.jpeg" alt="" class="img" />
          <p class="course-detail">
            ストレッチに特化した施術を行い柔軟性と身体の強化を行います
          </p></swiper-slide
        >
        <swiper-slide
          ><p>コンディショニング</p>
          <img src="@/img/test.jpeg" alt="" class="img" />
          <p>
            コンディショニングを通してあなたの体の悩みを解決します
          </p></swiper-slide
        >
        <swiper-slide
          ><p>コンディショニング</p>
          <img src="@/img/test.jpeg" alt="" class="img" />
          <p>
            コンディショニングを通してあなたの体の悩みを解決します
          </p></swiper-slide
        >
        <!-- 追加ここから -->
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
        <!-- ここまで -->
      </swiper>
    </div>
    <div class="wrap-2">
      <h3>こんな人におすすめ</h3>
      <div class="recomend-icon">
        <div>
          <img src="@/img/waist.jpeg" alt="" class="icon" />
          <p class="icon-detail">腰痛</p>
        </div>
        <div>
          <img src="@/img/leg.jpeg" alt="" class="icon" />
          <p class="icon-detail">膝痛</p>
        </div>
        <div>
          <img src="@/img/shoulder.jpeg" alt="" class="icon" />
          <p class="icon-detail">肩こり</p>
        </div>
      </div>
      <div class="recomend-icon">
        <div>
          <img src="@/img/suffer.jpeg" alt="" class="icon" />
          <p class="icon-detail">だるさ</p>
        </div>
        <div>
          <img src="@/img/suffer.jpeg" alt="" class="icon" />
          <p class="icon-detail">疲労軽減</p>
        </div>
        <div>
          <img src="@/img/suffer.jpeg" alt="" class="icon" />
          <p class="icon-detail">メンテナンス</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toppage",
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
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
  .wrap-2 {
    margin-top: 50px;
    padding: 50px 10px 0 10px;
    text-align: left;
    background: linear-gradient(-135deg, #42f3be, #4380f3) fixed;
    h3 {
      margin: 0 0 20px 20px;
    }
    .recomend-icon {
      width: 100%;
      display: flex;
      text-align: center;
      margin: auto;
      justify-content: space-between;
      .icon {
        width: 65px;
        height: auto;
        margin: auto;
      }
      .icon-detail {
        width: 100px;
        height: 50px;
        line-height: 50px;
        background-color: rgb(7, 179, 195);
        border-radius: 100vh;
        color: #fff;
        text-align: center;
      }
    }
  }
  .swiper {
    width: 100%;
  }
  .img {
    width: 100%;
    height: auto;
  }
  .worry_example {
    text-align: left;
  }
}
.swiper-container {
  height: 300px;
  width: 100%;
}
.swiper-slide {
  width: 100px;
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
  border-left: 5px solid #fff;
  .course-detail {
    padding-right: 10px;
  }
}
.swiper-button-prev {
  left: 0;
}
</style>
