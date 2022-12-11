<template>
  <div class="container">
    <div class="wrap">
      <h3 class="title">お問い合わせ</h3>
      <div class="contact-way">
        <h4 class="way">お電話からのご予約・お問い合わせ</h4>
        <a href="tel:000-1234-5678">tel: 000-1234-5678</a>
      </div>
      <div class="contact-way">
        <h4 class="way">LINEからのご予約・お問い合わせ</h4>
        <img src="@/img/qrcode.jpeg" alt="" class="qrcode">
      </div>
    </div>
    <div class="wrap">
      <h3 class="title">よくあるご質問</h3>
      <div class="question">
        <div class="faq">
          <p>Q: 効果はどのくらいの期間で実感できますか？</p>
          <p>A: 個人差はありますが数週間で実感することができます。</p>
        </div>
        <div class="faq">
          <p>Q: cross-conditionだからこそできるトレーニングは？</p>
          <p>A: こんでしょニングトレーニングという、負荷のあまりかからないトレーニングはcross conditioningならではトレーニングです。</p>
        </div>
        <div class="faq">
          <p>Q: 効果はどのくらいの期間で実感できますか？</p>
          <p>A: 個人差はありますが数週間で実感することができます。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "toppage",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  font-weight: 300;
  .wrap {
    .title {
      border-left: 5px solid rgb(118, 244, 242);
      margin: 20px 0 0 15px;
      font-size: 15px;
    }
    .contact-way {
      font-size: 13px;
      margin: 20px 0 0 20px;
      .way {
        width: auto;
        margin-top: 30px;
        margin-right: 15px;
        background-color: rgb(118, 244, 242);
      }
      .qrcode {
        width: 200px;
        height: auto;
      }
    }
    .question {
      text-align: center;
      .faq {
        margin: 40px auto;
        color: black;
        text-align: left;
        padding: 0 10px 0 10px;
        width: 80%;
        background-color: rgb(207, 204, 204);
        border-radius: 10px;
      }
    }
  }
}
</style>
