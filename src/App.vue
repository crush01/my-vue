<template>
  <div id="app">
    <router-view />
    <router-link to="/" class="home-btn">
      回首页
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
  font-size: 16px;
  .home-btn {
    position: fixed;
    top: 50%;
    right: 0;
    padding: 5px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }
}
</style>
