<template>
    <div class="login-form">
        <div class="container">
            <h3>LOGIN</h3>
            <div class="msg">{{msg}}</div>
            <div class="form-group">
                <label for="Account">Account</label>
                <input type="text" class="form-control" id="account" placeholder="Account" v-model="account">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" class="ck" v-model="remember">Remember me?
                </label>
            </div>
            <button class="btn btn-primary" @click="checkLogin">login</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                account: '',
                password: '',
                remember: false,
                msg: ''
            };
        },
        computed: {},
        methods: {
            checkLogin() {
                this.$axios('admin/login', {
                    method: 'get',
                    params: {
                        account: this.account,
                        password: this.password
                    }
                }).then(res => {
                    this.msg = res.data.msg
                    this.$router.push(res.data.url)
                })
            }
        },
    };
</script>

<style scoped>
    .login-form {
        position: fixed;
        width: 100%;
        height: 100%;
        background: url('~assets/img/login.jpg');
        background-size: 100% 100%;
    }

    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px 30px;
        width: 400px;
        border: 1px solid black;
        border-radius: 20px;
        box-shadow: 0 0 15px rgba(0, 0, 0, .6);
    }

    h3 {
        text-align: center;
        margin-bottom: 30px;
    }

    .ck {
        width: 15px;
        height: 15px;
    }

    button {
        margin-left: 50%;
        transform: translate(-50%);
        width: 80px;
        height: 40px;
        font-size: 18px;
    }

    .msg {
        position: fixed;
        top: 60px;
        left: 50%;
        transform: translate(-50%);
        color: blue;
        font-size: 14px;
    }
</style>