<template>
  <div id="app">
    <!-- <h3>{{$store.state.counter}}</h3> -->
    <h3>{{count}}</h3>
    <h3>{{$store.getters.powerCounter}}</h3>
    <h3>{{$store.getters.less25}}</h3>
    <h4 v-for="item in stu">{{item.name}}</h4>
    <h3>{{$store.getters.less25Length}}</h3>
    <!-- 传参方式 -->
    <h3>{{$store.getters.moreAge(25)}}</h3>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: ''
      };
    },
    computed: {
      count() {
        return this.$store.state.counter
      },
      stu() {
        return this.$store.getters.less25
      }
    },
    methods: {
      add() {
        this.$store.commit('increment')
      },
      sub() {
        this.$store.commit('decrement')
      }
    },
  };
</script>

<style scoped>

</style>