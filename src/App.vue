<template>
  <div id="app">
    <HomeTitle class="top"></HomeTitle>
    <router-view class="body-content"/>
  </div>
</template>
<script>
import HomeTitle from "./components/HomeTitle.vue";
export default {
  name:'App',
  components:{
    HomeTitle
    
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;

}
body{
  // overflow: hidden;
  padding: 0px;
  margin: 0px;
  // overflow: scroll;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  
  router-view{
    margin: 0px;
    padding: 0px;
    // padding-top: 10vh;
    // overflow: hidden;
    height:auto;

  }
  



}
</style>
