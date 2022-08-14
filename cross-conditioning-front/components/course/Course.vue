<template>
  <div class="container">
    <div class="top">
      <h2 class="title">course</h2>
      <p class="discription">あなたにぴったりのコースをご紹介します！！</p>
    </div>
    <div class="wrap">
      <h2 class="course-money">コースと料金</h2>
      <div>
        <h3 class="course">ストレッチ</h3>
        <p class="course-discription">
          ・仕事終わりにリラックスしたい<br />・休日に癒されたい。<br />・腰痛や膝痛、肩こりなどの身体の不満で悩んでいる。<br />・疲労軽減したい。<br />・スポーツ、運動をしていて可動域の改善をしたい。<br />
          上記のような思いがある方は、<span class="course-name">ストレッチ</span
          >をオススメします!
        </p>
      </div>
      <div class="money">
        <h2 class="title">コース料金</h2>
        <div class="table">
          <div class="table-div">
            <el-table :data="tableData" border>
              <el-table-column prop="iter" label="回数" width="150">
              </el-table-column>
              <el-table-column prop="price" label="値段" width="150">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div>
        <h3 class="course">コンディショニングトレーニング</h3>
        <p class="course-discription">
          ・一般的な筋トレのような高負荷でなく、自重や軽負荷でのトレーニングがしたい。<br />・軽度のトレーニングから慣らしていきたい。<br />・定期的な運動習慣を身につけたい。<br />・兼既往な体づくりをしたい。<br />・スポーツや運動をしていて、パフォーマンスアップをしたい。<br />
          上記のような思いがある方は、<span class="course-name">コンディショニングトレーニング</span
          >をオススメします!
        </p>
      </div>
      <div class="money">
        <h2 class="title">コース料金</h2>
        <div class="table">
          <div class="table-div">
            <el-table :data="tableData" border>
              <el-table-column prop="iter" label="回数" width="150">
              </el-table-column>
              <el-table-column prop="price" label="値段" width="150">
              </el-table-column>
            </el-table>
          </div>
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
      tableData: [
        {
          iter: "4回",
          price: "26400",
        },
        {
          iter: "8回",
          price: "52800",
        },
        {
          iter: "12回",
          price: "79200",
        },
        {
          iter: "16回",
          price: "105600",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  font-family: "Noto Sans", sans-serif;
  font-weight: 300;
  .top {
    text-align: right;
    padding-right: 20px;
    padding-top: 50px;
    color: white;
    height: 150px;
    background-image: url("@/img/black.jpeg");
    .discription {
      text-align: left;
      margin-left: auto;
      width: 180px;
    }
  }
  .wrap {
    .course-money {
      border-top: 3px solid rgb(118, 244, 242);
      border-bottom: 3px solid rgb(118, 244, 242);
      padding: 10px;
      font-size: 18px;
    }
    .course {
      
      border-left: 5px solid rgb(118, 244, 242);
      margin: 40px 0 0 15px;
      font-size: 15px;
    }
    .course-discription {
      padding: 10px 0 0 15px;
      font-size: 12px;
      .course-name {
        font-size: 15px;
        color: rgb(5, 5, 192);
      }
    }
    .money {
      .title {
        font-size: 15px;
        margin: 20px 0 0 15px;
      }
      .table {
        text-align: center;
        margin: auto;
        .table-div {
          width: 80%;
          margin: auto;
          text-align: center;
        }
      }
    }
  }
}
</style>
