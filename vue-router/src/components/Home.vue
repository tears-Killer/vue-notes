<template>
  <div>
    <h3>主页</h3>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>

</style>
