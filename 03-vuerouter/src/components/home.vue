<template>
  <div>
    <h2>我是home页面</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return{
        path:'/home/news'
      }
    },
    created() {
      console.log('home created');
    },
    mounted() {
      console.log('home mounted');
    },
    activated(){
      this.$router.push(this.path);
    },
    /*destroyed() {
      console.log('home destroyed');
    }*/
    beforeRouteLeave(to,from,next){
      //console.log(this.$route.path);
      this.path = this.$route.path;
      next();
    }
  }
</script>

<style scoped>

</style>
