<template>
  <div class="container">
    <div class="title">
      <div>
        <img src="@/img/logo_2.jpg" alt="" class="title-logo">
        <h2 class="big-sub">圧倒的な変化と感動を。</h2>
      </div>
      <div>
        <h3>
          <span class="marker">ストレッチ</span><br />✖️<br /><span
            class="marker"
            >コンディショニングトレーニング</span
          ><br /><br />で身体の悩みを解決します！
        </h3>
      </div>
      <div>
        <h2 class="comp-name">Cross Condition</h2>
      </div>
      <div class="display-circle">
        <div class="circle">
          <p class="circle-inner">いつでも解約OK!</p>
        </div>
        <div class="circle">
          <p class="circle-inner">24時間予約OK!</p>
        </div>
        <div class="circle">
          <p class="circle-inner">シューズ無料レンタル</p>
        </div>
      </div>
    </div>
    <div class="sample_box12">
      <div class="sample_box12_tape"> </div>
      <p class="sample_box12_title">OPEN記念キャンペーン</p>
      <p>ストレッチor体幹トレーニングor両方選べる</p>
      <div class="price">
        <div class="price-element-1">初回価格60分<br />7500円</div>
        <p class="price-arrow">→</p>
        <div class="price-element-2">特別価格60分<br />3500円</div>
      </div>
    </div>
    <div class="wrap">
      <h3>こんな悩みありませんか？</h3>
      <ul class="worry-example">
        <font-awesome-icon
          icon="person-circle-check"
          class="example-icon"
        />最近運動不足で体が重い<br />
        <font-awesome-icon
          icon="person-circle-check"
          class="example-icon"
        />食事制限しているけど痩せられない<br />
        <font-awesome-icon
          icon="person-circle-check"
          class="example-icon"
        />筋力トレーニングが続けられない
      </ul>
      <div class="worry-solution">
        <div class="solution-name">
          ストレッチ
        </div>
        <img src="@/img/stretch.jpeg" alt="" class="solution-img">
        <p class="solution-detail">ストレッチを通してあなたの運動不足を解消します。トレーナーが１対１で指導し、あなたに最適な解消方法を提案します。</p>
      </div>
      <div class="plus">➕</div>
      <div class="worry-solution">
        <div class="solution-name">
          コンディショニング
        </div>
        <img src="@/img/conditioning.jpeg" alt="" class="solution-img">
        <p class="solution-detail">ストレッチを通してあなたの運動不足を解消します。トレーナーが１対１で指導し、あなたに最適な解消方法を提案します。</p>
      </div>
    </div>
    <div class="wrap-2">
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
      <h3>講師紹介</h3>
      <div class="teacher-container-1">
        <div class="teacher">
          <p>廣田朋哉</p>
          <img src="@/img/player_1.jpeg" alt="" class="player-1" />
        </div>
        <div class="teacher">
          <p>岩本陸</p>
          <img src="@/img/player_1.jpeg" alt="" class="player-2" />
        </div>
      </div>
      <div class="teacher-container">
        <div class="teacher">
          <p>廣田朋哉</p>
          <img src="@/img/player_1.jpeg" alt="" class="player" />
        </div>
        <div class="teacher">
          <p>廣田朋哉</p>
          <img src="@/img/player_1.jpeg" alt="" class="player" />
        </div>
        <div class="teacher">
          <p>廣田朋哉</p>
          <img src="@/img/player_1.jpeg" alt="" class="player" />
        </div>
      </div>
    </div>
    <!-- <div class="wrap-2">
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
    </div> -->
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
@import url('https://fonts.googleapis.com/css?family=Kosugi');
.container {
  text-align: center;
  font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
  font-weight: 300;
  background-color: #f3e8d7;
  color: #0c3b48;
  .title {
    padding: 0.5em 1em;
    background: #f3e8d7; /*背景色*/
    z-index: 1;
    text-align: left;
    width: auto;
    height: 550px;
    background-image: url("@/img/top_page_2.png");
    background-position: center;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.5);
    .title-logo {
      margin-top: 50px;
      width: 47%;
    }
    .display-circle {
      padding-top: 10px;
      display: flex;
      font-size: 12px;
      .circle {
        position: relative; /* ←文字の親要素に指定 */
        padding-bottom: 10px;
        width: 100px;
        height: 100px;
        background-color: #f8f3ea;
        border-radius: 50%;
        margin: 0 auto;
        text-align: center;
        border: solid 1px #0c3b48;
        box-shadow: 0 10px 25px 0 rgba(96, 194, 162, .5);
      }
      .circle::before {  
        content: "";
        width: 93px;
        height: 100px;
        position: absolute;
        top: 4px;
        left: 4px;
        border: solid #60c2a2 2px;
        border-radius: 50%;
        box-sizing: border-box;
      }
      .circle-inner {
        position: absolute;
        top: 40%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }
    .big-sub {
      
      font-weight: 600;
      display: inline-block;
      margin-top: 10px;
      font-size: 25px;
    }
    h3 {
      width: 76%;
      font-size: 13px;
      text-align: center;
    }
    .marker {
      font-size: 16px;
      font-weight: 600;
      color: rgb(255, 94, 0);
    }
    .comp-name {
      text-align: center;
      margin: 15px 20px;
      font-weight: bold;
      font-family: 'Vollkorn', serif;
      background-color: white;
      width: auto;
      color: #60c2a2;
      font-size: 33px;
      box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
      border-radius: 5px;
    }
  }
  .sample_box12 {
    width: 260px;/* 紙の横幅 100%にすると全幅表示に */
    padding: 15px;
    margin: 3em auto;
    background-color: #f8f3ea;/* 紙の色 */
    border: solid #60c2a2 2px;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.03);transform:rotate(2deg);
    word-break: break-all;
    p {
      margin: 0; 
      padding: 0;
      font-size: 0.8em;
    }
  }
  .sample_box12_tape {
    width: 50%;
    height: 35px;
    margin: -25px auto 0;
    background: rgba(251, 234, 144, 0.5);/* テープの色 */
    transform: rotate(-3deg);
    opacity: 0.9;
  }
  .price {
    display: flex;
    margin: 20px auto;
    .price-element-1 {
      margin: auto;
    }
    .price-arrow {
      padding-top: 20px;
    }
    .price-element-2 {
      margin: auto;
      color: rgb(255, 94, 0);
    }
  }
  .sample_box12_title {
    text-align: center;
    font-size: 1.3em!important;
    margin-top: 10px!important;
  }
  .sample_box12_subtitle {
    text-align: center;
    font-size: 0.7em!important;
    margin-bottom: 1em!important;
  }
  .wrap {
    margin: 50px 0 0 20px;
    text-align: left;
    .worry-example {
      text-align: left;
      padding: 10px;
      .example-icon {
        padding-right: 10px;
      }
    }
    .worry-solution {
      background-color: #60c2a2;
      padding-top: 5px;
      margin-right: 5%;
      .solution-name {
        background-color: #60c2a2;
        text-align: center;
        padding: 10px;
        margin: 20px;
        border: solid #f8f3ea 2px;
        color: #f8f3ea;
      }
      .solution-img {
        padding: 0 20px;
        width: 85%;
      }
      .solution-detail {
        padding: 15px;
        color: #f8f3ea;
        font-size: 13px;
      }
    }
    .plus {
      text-align: center;
      font-size: 50px;
    }
  }
  .wrap-2 {
    h3 {
      margin: 50px 0 0 20px;
      text-align: left;
    }
    .teacher-container-1 {
      display: flex;
      margin: 0 40px;
      .teacher {
        padding: 10px;
        margin: auto;
        width: 100px;
        text-align: center;
        .player-1 {
          width: 90%;
          border-radius: 50px;
          text-align: right;
        }
        .player-2 {
          width: 90%;
          border-radius: 50px;
        }
        .player {
          width: 90%;
          border-radius: 50px;
        }
      }
    }
    .teacher-container {
      display: flex;
      .teacher {
        padding: 10px;
        margin: auto;
        width: 100px;
        text-align: center;
        .player-1 {
          width: 90%;
          border-radius: 50px;
          text-align: right;
        }
        .player-2 {
          width: 90%;
          border-radius: 50px;
        }
        .player {
          width: 90%;
          border-radius: 50px;
        }
      }
    }
  }
  // .wrap-2 {
  //   margin-top: 50px;
  //   padding: 50px 10px 0 10px;
  //   text-align: left;
  //   background: linear-gradient(-135deg, #42f3be, #4380f3) fixed;
  //   h3 {
  //     margin: 0 0 20px 20px;
  //   }
  //   .recomend-icon {
  //     width: 100%;
  //     display: flex;
  //     text-align: center;
  //     margin: auto;
  //     justify-content: space-between;
  //     .icon {
  //       width: 65px;
  //       height: auto;
  //       margin: auto;
  //     }
  //     .icon-detail {
  //       width: 100px;
  //       height: 50px;
  //       line-height: 50px;
  //       background-color: rgb(7, 179, 195);
  //       border-radius: 100vh;
  //       color: #fff;
  //       text-align: center;
  //     }
  //   }
  // }
  .swiper {
    width: 100%;
  }
  .img {
    width: 100%;
    height: auto;
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
  background-color: rgb(248, 241, 235);
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-left: 5px solid rgb(255, 255, 255);
  .course-detail {
    padding-right: 10px;
  }
}
.swiper-button-prev {
  left: 0;
}
</style>
