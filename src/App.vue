<template>
  <div id="app">
    <!--导航-->
    <nav style="height: 30px;">
      <a href="javascript:;" @click="$router.push('/vicsek')">vicsek</a>
      <a href="javascript:;" @click="$router.push('/sierpinski')">sierpinski</a>
    </nav>
    <router-view class="child-view"/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
