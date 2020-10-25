<template>
  <div id="app">
  
     <router-link to="/home" tag="button" replace>主页</router-link>
     <router-link to="/about" active-class="active">关于</router-link>
     <router-link :to="'/user/'+id">用户</router-link>
     <router-link :to="{path:'/profile',query:{name:'wj',age: 22}}">文档</router-link>

    <!-- <button @click="homeClick">主页</button>
    <button @click="aboutClick">关于</button> -->
    <h3>{{userId}}</h3>
    <h3>{{$route.params.id}}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      id: 1
    }
  },
  methods:{
      homeClick(){
        this.$router.push('/home')
      },
      aboutClick(){
        this.$router.replace('/about')
      }
  },
  computed:{
    userId(){
      return this.$route.params.id
    }
  }
};
</script>

<style>
.router-link-active {
  color: red;
}

.active {
  color: blue;
}
</style>
