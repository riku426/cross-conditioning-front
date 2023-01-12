<template>
  <div class="content">
    <div class="header">
      <Header />
    </div>
    <div class="title">
      <Access />
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
}
</style>
