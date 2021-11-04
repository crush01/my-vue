<template>
  <div class="home-layout">
    <div>
      <p>笔记简写：</p>
      <p></p>
      <router-link to="/sass-use">
        scss的使用
      </router-link>
      <router-link to="/eslint-use">
        eslint相关
      </router-link>
      <router-link to="/flexible-use">
        flexible.js相关（移动端自适应）
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('por', process.env.VUE_APP_TEST)
  }
}
</script>

<style lang="scss">
.home-layout {
  padding: 20px;
  a {
    color: $base_color;
    font-size: px2rem(20px);
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #f5f5f5;
  }
}
</style>
