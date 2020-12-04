<template>
  <div id="app">
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
<!--    <router-link to="/user/zhangsan" replace>用户</router-link>-->
    <!--<router-link :to="/user/+userId">用户</router-link>-->
    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->
    <button @click="userClick">用户</button>
<!--    <router-link to="/profile">档案</router-link>-->
<!--    <router-link :to="{path: '/profile/123',query:{name:'张三',age:18,height:1.75}}">档案</router-link>-->
    <button @click="profileClick">档案</button>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId:'张三'
      }
    },
    methods: {
      homeClick() {
        // this.$router.push('/home');
        this.$router.replace('/home');
      },
      aboutClick() {
        // this.$router.push('/about');
        this.$router.replace('/about');
      },
      userClick(){
        this.$router.replace('/user/'+this.userId)
      },
      profileClick(){
        this.$router.replace({
          path:'/profile',
          query:{
            name:'张三',
            age:18,
            height:1.85
          }
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .active {
    color: chartreuse;
  }
</style>
