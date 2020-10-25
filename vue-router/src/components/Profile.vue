<template>
  <div>
        <h3>profile组件</h3>
        <ul>
            <li>{{$route.query.name}}</li>
            <li>{{$route.query.age}}</li>
        </ul>
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
