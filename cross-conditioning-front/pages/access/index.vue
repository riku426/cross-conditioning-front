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
  background-color: white;
  .header {
    text-align: right;
    margin-right: 10px;;
  }
}
</style>
