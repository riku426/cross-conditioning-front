<template>
  <div class="container">
    <h2 class="title">Access</h2>
    <h3 class="shop">姫路店</h3>
    <div class="adress-tb">
      <table border="1" class="table">
        <tr v-for="d in tableData" :key="d.name">
          <td>{{ d.name }}</td>
          <td>{{ d.value }}</td>
        </tr>
      </table>
    </div>
    <GmapMap
      :center="{ lat: 35.66606091, lng: 139.41392096 }"
      :zoom="16"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
    >
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "toppage",
  data() {
    return {
      maplocation: { lng: 0, lat: 0 },
      zoom: 4,
      styleMap: {
        width: "100%",
        height: "400px",
      },
      mapOptions: {
        streetViewControl: false,
        styles: [],
      },
      tableData: [
        {
          name: "住所",
          value: "東京都墨田区本所1丁目3-55",
        },
        {
          name: "最寄駅",
          value: "浅草駅徒歩3分",
        },
        {
          name: "定休日",
          value: "火曜日",
        },
        {
          name: "営業時間",
          value: "平日10:00-18:00  休・祝日10:00-15:00",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  font-weight: 300;
  .title {
    margin-left: 10px;
    font-size: 18px;
    border-bottom: 1px solid black;
  }
  .shop {
    border-left: 5px solid rgb(118, 244, 242);
    margin: 20px 0 0 15px;
    font-size: 15px;
  }
  .adress-tb {
    margin: 30px 0 20px 20px;
    .table {
      width: 90%;
      font-size: 12px;
    }
  }
}
</style>
