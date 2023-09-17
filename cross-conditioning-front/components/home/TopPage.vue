<template>
  <div class="container">
    <div class="title">
      <div>
        <img src="@/img/logo_2.jpg" alt="" class="title-logo" />
        <h2 class="big-sub">{{ catchCopy }}</h2>
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
        <h1 class="comp-name">{{ companyName }}</h1>
      </div>
      <div class="display-circle">
        <div class="circle" v-for="item in circleItems" :key="item.name">
          <p class="circle-inner">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="campaign-box">
      <div class="sample_box12">
        <div class="sample_box12_tape"></div>
        <p class="sample_box12_title">{{ news }}</p>
        <p>ストレッチor体幹トレーニングor両方選べる</p>
        <div class="price">
          <div class="price-element-1">初回価格60分<br />7500円</div>
          <p class="price-arrow">→</p>
          <div class="price-element-2">特別価格60分<br />3500円</div>
        </div>
      </div>
      <div class="sample_box12">
        <div class="sample_box12_tape"></div>
        <p class="sample_box12_title">{{ news2 }}</p>
        <p>ご紹介した方にもされた方にも特典あり!</p>
        <div class="flex-box">
          <div class="introducer">
            <p>ご紹介者様</p>
            <div>60分無料</div>
          </div>
          <div class="friend">
            <p>お友達</p>
            <div>初回無料</div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <h3>こんな悩みありませんか？</h3>
      <ul class="worry-example">
        <div class="worry-element" v-for="item in worryItems" :key="item.id">
          <img src="@/img/check.png" alt="" class="worry-check" />
          <p>{{ item.name }}</p>
        </div>
      </ul>
      <div class="solution-container">
        <div class="worry-solution">
          <div class="solution-name">{{ solutionItems[0].name }}</div>
          <img :src="solutionItems[0].img" alt="" class="solution-img" />
          <p class="solution-detail">
            {{ solutionItems[0].discription }}
          </p>
        </div>
        <div class="plus">＋</div>
        <div class="worry-solution">
          <div class="solution-name">{{ solutionItems[1].name }}</div>
          <img :src="solutionItems[1].img" alt="" class="solution-img" />
          <p class="solution-detail">
            {{ solutionItems[1].discription }}
          </p>
        </div>
      </div>
    </div>
    <div class="wrap-2">
      <h3>代表挨拶</h3>
      <div class="player-container">
        <div>
          <p class="player-discription">廣田智哉</p>
          <img src="@/img/player_1.jpg" alt="" class="player" />
        </div>
        <div class="discription">
          {{ ceoStatement }}
        </div>
      </div>
    </div>
    <div class="wrap-2">
      <h3>料金表</h3>
      <table class="table-1">
        <caption class="course">
          基本コース
        </caption>
        <tr class="tr-element">
          <th>40分</th>
          <th class="popular">
            <span class="inner"><span class="no1">人気No.1</span>60分</span>
          </th>
          <th>80分</th>
          <th>100分</th>
        </tr>
        <tr class="tr-head">
          <td>¥5,000</td>
          <td class="popular">¥7,500</td>
          <td>¥10,000</td>
          <td>¥12,500</td>
        </tr>
      </table>
      <table class="table-1">
        <caption class="course">
          ３回券
        </caption>
        <tr class="tr-element">
          <th class="not-no1">60分</th>
          <th class="not-no1">80分</th>
          <th>100分</th>
        </tr>
        <tr class="tr-head">
          <td v-for="item in threeTickets" :key="item.id">{{ item.name }}</td>
        </tr>
        <tr>
          <td v-for="item in threeTickets" :key="item.id" class="sale">
            {{ item.sale }}
          </td>
        </tr>
      </table>
    </div>
    <div class="wrap-2">
      <h3>予約・お問い合わせ</h3>
      <div class="offer-container">
        <div class="offer-method">
          <a href="https://beauty.hotpepper.jp/kr/slnH000657082/" class="link">ホットペッパービューティー</a>
        </div>
        <div class="offer-method">
          <p>電話番号：080-2470-9958</p>
        </div>
        <div class="offer-method">
          <p>公式LINE：</p>
          <img src="@/img/line.png" alt="" class="line" />
        </div>
      </div>
    </div>
    <div class="wrap-2">
      <h3>アクセス</h3>
      <div class="offer-container">
        <div class="offer-method">
          <p>
            住所： 〒670-0962<br />
            兵庫県姫路市南駅前町75イルソーレ南駅前301号室
          </p>
          <p>最寄駅：姫路駅から徒歩５分</p>
        </div>
      </div>
    </div>
    <div class="wrap-2">
      <h3>お客さまの声</h3>
      <div v-for="review in reviews" :key="review.id" class="customer-review">
        <div>
          <p>{{ review.name }}</p>
          <img
            v-if="review.gender === 0"
            src="@/img/man.svg"
            alt=""
            class="customer-img"
          />
          <img
            v-if="review.gender === 1"
            src="@/img/woman.svg"
            alt=""
            class="customer-img"
          />
        </div>
        <div class="balloon3-left">
          {{ review.review }}
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
      catchCopy: "圧倒的な変化と感動を。",
      companyName: "Cross Condition",
      circleItems: [
        { name: "手ぶらOK" },
        { name: "服貸し出し無料" },
        { name: "無料カウンセリング" },
      ],
      news: "OPEN記念キャンペーン",
      news2: "友達紹介キャンペーン",
      worryItems: [
        {
          id: 1,
          name: "肩こり腰痛がひどい",
        },
        {
          id: 2,
          name: "姿勢を良くしたい",
        },
        {
          id: 3,
          name: "運動不足を解消したい",
        },
      ],
      ceoStatement:
        "こんにちは、代表の廣田です。運動しにくい環境で腰痛や肩こりに悩まされている方が多いと思います。ストレッチと体幹トレーニングで一緒に日常生活の辛さを、一緒に変えていきましょう！",
      threeTickets: [
        {
          id: 2,
          name: "¥18,000",
          sale: "¥4,500お得",
        },
        {
          id: 3,
          name: "¥24,000",
          sale: "¥6,000お得",
        },
        {
          id: 4,
          name: "¥30,500",
          sale: "¥7,500お得",
        },
      ],
      solutionItems: [
        {
          id: 1,
          name: "ストレッチ",
          img: require("@/img/stretch.jpeg"),
          discription:
            "ストレッチを通してあなたの運動不足を解消します。トレーナーが1対1で指導し、あなたに最適な解消方法を提案します。",
        },
        {
          id: 2,
          name: "コンディショニング",
          img: require("@/img/conditioning.jpeg"),
          discription:
            "ストレッチを通してあなたの運動不足を解消します。トレーナーが1対1で指導し、あなたに最適な解消方法を提案します。",
        },
      ],
      reviews: [
        {
          id: 1,
          gender: 0,
          name: "35歳・男性",
          review:
            "創業当初から毎週通っています。代表の廣田さんが本当に親身に相談に乗ってくださり、毎週快適な時間を過ごせています！",
        },
        {
          id: 2,
          gender: 1,
          name: "28歳・女性",
          review:
            "最初は不安でしたが、女性でも安心して通うことができます！最高です！",
        },
      ],
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
@import url("https://fonts.googleapis.com/css?family=Kosugi");

.container {
  text-align: center;
  font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
  font-weight: 300;
  background-color: #f3e8d7;
  color: #0c3b48;
  .title {
    padding: 0.5em 0.5em;
    background: #f3e8d7; /*背景色*/
    z-index: 1;
    text-align: left;
    width: auto;
    height: 550px;
    background-image: url("@/img/top.png");
    background-position: right;
    background-size: 60%;
    background-position: center;
    background-size: cover;
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
        box-shadow: 0 10px 25px 0 rgba(96, 194, 162, 0.5);
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
      font-family: "Vollkorn", serif;
      background-color: white;
      width: auto;
      color: #60c2a2;
      font-size: 33px;
      box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
      border-radius: 5px;
    }
  }
  .sample_box12 {
    width: 260px; /* 紙の横幅 100%にすると全幅表示に */
    padding: 15px;
    margin: 3em auto;
    background-color: #f8f3ea; /* 紙の色 */
    border: solid #60c2a2 2px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.03);
    transform: rotate(2deg);
    word-break: break-all;
    p {
      margin: 0;
      padding: 0;
      font-size: 0.8em;
    }
    .flex-box {
      display: flex;
      margin-top: 30px;
      .introducer {
        margin: auto;
        border: solid 1px black;
        padding: 15px;
        border-radius: 10px;
        background-color: rgba(251, 234, 144, 0.5);
      }
      .friend {
        margin: auto;
        border: solid 1px black;
        padding: 15px;
        border-radius: 10px;
        background-color: rgba(251, 234, 144, 0.5);
      }
    }
  }
  .sample_box12_tape {
    width: 50%;
    height: 35px;
    margin: -25px auto 0;
    background: rgba(251, 234, 144, 0.5); /* テープの色 */
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
    font-size: 1.3em !important;
    margin-top: 10px !important;
  }
  .sample_box12_subtitle {
    text-align: center;
    font-size: 0.7em !important;
    margin-bottom: 1em !important;
  }
  .wrap {
    margin: 50px 0 0 20px;
    text-align: left;
    .worry-example {
      text-align: left;
      padding: 10px;
      .worry-element {
        height: 25px;
        display: flex;
        .worry-check {
          padding-right: 5px;
          height: 100%;
        }
        p {
          margin: 5px;
        }
      }
    }
    .worry-solution {
      background-color: #60c2a2;
      padding-top: 5px;
      margin-right: 5%;
      text-align: center;
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
        text-align: left;
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
    .player-container {
      width: 90%;
      margin: 0 auto;
      .player {
        width: 100%;
        height: auto;
      }
      .player-discription {
        margin: 20px 0 auto;
      }
      .discription {
        text-align: left;
        padding: 10px;
        margin: auto;
        width: 90%;
        background-color: white;
        border-radius: 10px;
      }
    }
    .table-1 {
      background-color: white;
      margin: 30px auto 0;
      border-collapse: collapse;
      border-spacing: 0;
      table-layout: fixed;
      width: 90%;
      .course {
        padding-bottom: 15px;
        font-size: 20px;
      }
      tr:last-child {
        border-bottom: solid 1px #ddd;
      }
      th {
        text-align: center;
        padding: 10px 0;
        border-right: solid 1px #ddd;
        border-left: solid 1px #ddd;
        width: 25%;
      }
      th:nth-child(1) {
        background-color: #60c2a2;
        color: white;
      }
      tr:nth-child(2) td {
        font-size: 20px;
        background-color: #60c2a2;
        color: white;
      }
      th:nth-child(3) {
        background-color: #60c2a2;
        color: white;
      }
      th:nth-child(4) {
        background-color: #60c2a2;
        color: white;
      }
      td {
        text-align: center;
        padding: 7px 0;
        border-right: solid 1px #ddd;
        border-left: solid 1px #ddd;
        width: 25%;
      }
      .popular {
        width: 25%;
      }
      th.popular {
        position: relative;
      }
      th.popular span.no1 {
        position: absolute;
        top: -20px;
        left: calc(50% - 20px);
        background: #bdcc28;
        width: 30%;
        font-size: 10px;
        border-radius: 15px;
        line-height: 1;
        padding: 5px;
      }
      th.popular span.inner {
        position: absolute;
        color: white;
        background-color: rgb(255, 94, 0);
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
        padding: 10px 0;
      }
      th.not-no1 {
        background-color: #60c2a2;
        color: white;
      }
      td.sale {
        color: red;
        font-size: 12px;
      }
    }
    .offer-container {
      text-align: left;
      margin: 0 30px;
      .offer-method {
        .line {
          width: 100%;
        }
        .link {
          text-decoration: none;
        }
        .link:hover {
          color: #60c2a2;
        }
        .link:active {
          color: #60c2a2;
        }
      }
    }
    .customer-review {
      margin: 10px;
      display: flex;
      text-align: center;
      .customer-img {
        margin-right: 10px;
        width: 100px;
      }
      .balloon3-left {
        position: relative;
        display: inline-block;
        margin: 20px;
        padding: 20px 15px;
        text-align: center;
        font-weight: bold;
        background: white;
        border-radius: 30%;
        box-sizing: border-box;
      }
      .balloon3-left:before {
        content: "";
        position: absolute;
        top: 50%;
        left: -25px;
        margin-top: -15px;
        border: 15px solid transparent;
        border-right: 15px solid white;
        z-index: 0;
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

@media all and (min-width: 768px) {
  .container {
    margin: 0px;
    font-size: 35px;
    .title {
      height: 1200px;
      background-position: right;
      background-size: 80%;
      background-repeat: no-repeat;
      .title-logo {
        width: 45%;
      }
      .big-sub {
        display: block;
        margin-left: 13%;
        font-size: 50px;
      }
      h3 {
        width: 50%;
        font-size: 30px;
        text-align: center;
      }
      .marker {
        font-size: 35px;
        font-weight: 600;
        color: rgb(255, 94, 0);
      }
      .comp-name {
        font-size: 50px;
        width: 40%;
        margin: 50px 150px;
      }
      .display-circle {
        font-size: 25px;
        margin-left: 10%;
        width: 60%;
        .circle {
          width: 200px;
          height: 200px;
          background-color: #f8f3ea;
          background-size: 50%;
          border-radius: 50%;
          margin: 0 auto;
          text-align: center;
          border: solid 1px #0c3b48;
          box-shadow: 0 10px 25px 0 rgba(96, 194, 162, 0.5);
        }
        .circle::before {
          content: "";
          width: 193px;
          height: 200px;
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
    }
    .campaign-box {
      display: flex;
      .sample_box12 {
        width: 40%;
        .sample_box12_title {
          font-size: 35px !important;
        }
        p {
          font-size: 16px;
        }
      }
    }
    .wrap {
      margin-left: 50px;
      .worry-example {
        .worry-element {
          margin: 30px;
          .worry-check {
            margin-right: 30px;
          }
        }
      }
      .solution-container {
        display: flex;
        .worry-solution {
          width: 40%;
          margin: 0 auto;
          .solution-detail {
            font-size: 30px;
            margin: 30px;
          }
        }
        .plus {
          width: 10%;
          font-size: 100px;
          margin: auto;
        }
      }
    }
    .wrap-2 {
      margin-left: 50px;
      .player-container {
        display: flex;
        .player {
          height: 300px;
          width: auto;
        }
        .discription {
          width: 70%;
          margin-top: auto;
        }
      }
      .table-1 {
        width: 70%;
        .course {
          font-size: 30px;
        }
      }
      .offer-container {
        .offer-method {
          .line {
            width: 30%;
          }
          .link {
            text-decoration: none;
          }
          .link:hover {
            color: #60c2a2;
          }
          .link:active {
            color: #60c2a2;
          }
        }
      }
      .customer-review {
        font-size: 20px;
        .balloon3-left {
          margin: 50px 160px;
          padding: 30px;
          font-size: 22px;
          height: 100%;
        }
      }
    }
  }
}
</style>
