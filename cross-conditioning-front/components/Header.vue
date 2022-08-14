<template>
  <div class="header-container">
    <div class="header-title">cross conditioning</div>
    <div class="header-menu">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <font-awesome-icon icon="bars" /><i
            class="el-icon-arrow-down el-icon--right"
          ></i>
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
      this.$router.push('/' + command)
    }
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  justify-content: space-between;
  width: 100%;
  display: flex;
  .header-title {
    margin: 10px 0 0 10px;
    font-family: "Noto Sans", sans-serif;
    font-weight: 800;
  }
  .header-menu {
    margin: 10px 0 0 10px;
    .el-dropdown-link {
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
