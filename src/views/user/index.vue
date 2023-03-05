<template>
  <div class="user-page" v-if="userInfo">
    <!-- 图片+姓名  -->
    <div class="header">
      <van-image class="avatar" round :src="userInfo.avatar" />
      <p class="user-name">{{userInfo.username}}</p>
    </div>
    <!-- 中间部分 -->
    <div class="nav-box">
      <van-grid column-num="3" clickable :border="false">
        <van-grid-item icon="underway-o" text="历史记录" to="/" />
        <van-grid-item icon="bookmark-o" text="我的收藏" to="/collect" />
        <van-grid-item icon="thumb-circle-o" text="我的点赞" to="/like" />
      </van-grid>
    </div>
    <!-- 底部部分 -->
    <van-cell-group class="mt20">
      <van-cell title="推荐分享" is-link />
      <van-cell title="意见反馈" is-link />
      <van-cell title="关于我们" is-link />
      <van-cell title="退出登录" is-link @click="logout" />
    </van-cell-group>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { del } from '@/utills/storage'
export default {
  name: 'user-page',
  props: {},
  components: {},
  data () {
    return {
      userInfo: null
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const { data } = await getUserInfo()
      this.userInfo = data.data
    },
    logout () {
      del()
      this.$router.push('/login')
      this.$toast('退出登录')
    }
  }
}
</script>

<style lang="less" scoped>
.user-page {
  padding: 0 10px;
}
.header {
  display: flex;
  align-items: center;
  padding: 20px 0;
  .avatar {
    width: 80px;
    height: 80px;
  }
  .user-name {
    padding-left: 20px;
  }
}
.mt20 {
  margin-top: 20px;
}
</style>
