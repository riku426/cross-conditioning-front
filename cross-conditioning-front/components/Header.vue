<template>
  <div class="header-container">
    <div class="header-title"><img src="@/img/logo_2.jpg" class="logo">Cross Condition</div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    handleCommand(command) {
      this.$router.push("/" + command);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  justify-content: space-between;
  display: flex;
  background-color: #f3e8d7;
  border: black 1px solid;
  .header-title {
    width: 80%;
    margin: 13px 0 0 0;
    font-family: "Noto Sans", sans-serif;
    font-weight: 800;
    height: 40px;
    display: flex;
    .logo {
      height: 100%;
    }
  }
}

@media all and (min-width: 768px) {
.header-container {
  .header-title {
    width: auto;
    text-align: center;
    font-size: 30px;
    margin: auto;
    .logo {
      text-align: center;
      margin-right: 20px;
    }
  }
}
}

</style>
