<template>
  <div class="login-page">
    <van-nav-bar title="面经登录" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="submit-btn">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
      <!-- 导航链接 -->
      <router-link class="link" to="/register">注册账号</router-link>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { save } from '@/utills/storage'
export default {
  name: 'login-page',
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
        // 发送ajax
        const { data } = await login({
          username: this.username,
          password: this.password
        })
        // 用户登录后，将token存入到localstronge中，假如token不过期他就直接登录
        save('TOKEN', data.data.token)
        // 注意点：先存token，后跳转
        this.$toast.success('登录成功')
        this.$router.push('/layout')
      } catch (error) {
        this.$toast('登陆失败')
      }
    }
  }
}

</script>

<style lang="less" scoped>
.link {
  float: right;
  color: rgb(0, 126, 196);
  padding-right: 16px;
}
.submit-btn {
  margin-top: 100px;
}
</style>
