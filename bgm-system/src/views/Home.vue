<template>
  <div id="home">
    <div id="sidebar">
      <h3>用户管理系统</h3>
      <ul>
        <li>用户列表</li>
        <li>管理员列表</li>
      </ul>
    </div>
    <div class="container">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>\</th>
            <th>姓名</th>
            <th>邮箱</th>
            <th>性别</th>
            <th>年龄</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in users">
            <td><input type="checkbox" :value="item.id"></td>
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.age}}</td>
            <td>
              <img src="~assets/img/trash.svg" alt="" width="16" height="16" class="svg" @click="deleteUser(item.id)">
              <img src="~assets/img/file-plus.svg" alt="" width="16" height="16" class="svg" @click="updateUser">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: {}
      };
    },
    methods: {
      deleteUser(uid) {
        this.$axios.post('admin/delete', { id: uid }).then(res => {
          if (res.data == 0) {
            alert("删除失败")
          } else {
            alert("删除成功")
          }

        })
      },
      updateUser() {

      }
    },
    mounted() {
      this.$axios.post('user/list').then(res => {
        this.users = res.data
      })
    },
    updated() {
      this.$axios.post('user/list').then(res => {
        this.users = res.data
      })
    }
  };
</script>

<style scoped>
  .svg {
    margin: 0 2px;
  }

  #sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
    height: 100%;
    background-color: rgb(34, 34, 143);
  }

  #sidebar h3 {
    text-align: center;
    margin: 20px;
    color: white;
    font-size: 20px;
    font-weight: 600;
  }

  #sidebar ul li {
    padding: 10px;
    padding-left: 20px;
    width: 100%;
    color: white;
    font-size: 16px;
    background-color: rgb(62, 70, 194);
    cursor: pointer;
  }
</style>