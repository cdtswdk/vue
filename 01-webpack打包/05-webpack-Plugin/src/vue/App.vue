<template>
    <div>
        <h2 class="title">{{name}}</h2>
    </div>
</template>
<script>
    export default {
        name: "App",
        data() {
            return {
                name: 'vue的app组件'
            };
        }
    }
</script>
<style scoped>
    .title {
        color: pink;
    }
</style>
