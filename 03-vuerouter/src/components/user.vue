<template>
  <div>
    <h2>user页面。。。</h2>
    <h2>{{userId}}</h2>
  </div>

</template>

<script>
  export default {
    name: "user",
    computed:{
      userId(){
        return this.$route.params.userId;
      }
    },
    created() {
      console.log('user created');
    },
    destroyed() {
      console.log('user destroyed');
    }
  }
</script>

<style scoped>

</style>
