<template>
  <div id="app">
    <!-- <img src="../img/logo.png"> -->
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h2>page121202123</h2> -->
    <!-- <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/blog">blog</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
    };
  },
  methods: {
    
  }
};
</script>
<style lang="stylus">

@import '../css/base.styl'
* 
  padding: 0;
  margin: 0;
html, body, #app
  width: 100vw;
  height: 100vh;
  overflow hidden


  
</style>
