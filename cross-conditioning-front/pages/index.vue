<template>
  <div class="base">
    <div class="content">
      <div class="header">
        <Header />
      </div>
      <div class="title">
        <TopPage />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="scss">
.content {
  width: 100%;
  background-color: #f3e8d7;
  .header {
    width: 100%;
    text-align: right;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .title {
    width: 100%;
  }
}
@media all and (min-width: 768px) {
  .base {
    background-color: #60c2a2;
    .content {
      width: 85%;
      margin: auto;
    }
  }
}
</style>
