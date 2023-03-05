<template>
  <div class="register-page">
    <van-nav-bar title="面经注册" />
    <!-- 表单内容 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' },   //requred :必填
         { pattern: /^[0-9a-zA-Z]{6,12}$/, message: '用户名必须为数字或字母组合，长度6-12' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' },
         { pattern: /^[0-9a-zA-Z]{6,12}$/, message: '用户名必须为数字或字母组合，长度6-12' },
         ]"
      />
      <div style="margin: 16px;">
        <van-button block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <!-- 导航链接 -->
    <router-link class="link" to="/login">有账号，去登陆</router-link>
  </div>
</template>

<script>
import { register } from '@/api/user'
export default {
  name: 'register-page',
  props: {},
  components: {},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    async onSubmit () {
      try {
        await register({
          username: this.username,
          password: this.password
        })
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  float: right;
  color: rgb(0, 102, 153);
  padding-right: 16px;
}
</style>
