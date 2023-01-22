<template>
  <div class="header-container">
    <div class="header-title"><img src="@/img/logo_2.jpg" class="logo">Cross Condition</div>
    <div class="header-menu">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="@/img/menu.png" alt="" class="menu">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="">ホーム</el-dropdown-item>
          <el-dropdown-item command="course">コース一覧</el-dropdown-item>
          <el-dropdown-item command="access">アクセス</el-dropdown-item>
          <el-dropdown-item command="contact">お問い合わせ</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
    margin: 13px 0 0 0;
    font-family: "Noto Sans", sans-serif;
    font-weight: 800;
    height: 40px;
    display: flex;
    .logo {
      height: 100%;
    }
  }
  .header-menu {
    margin: 10px 0 0 10px;
    .el-dropdown-link {
      .menu {
        height: 30px;
      }
      cursor: pointer;
      color: gray;
      font-size: 20px;
      .el-icon-arrow-down {
        font-size: 20px;
      }
    }
  }
}
</style>
