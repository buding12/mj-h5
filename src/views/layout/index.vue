<template>
  <div class="layout-page">
    <!-- 二级路由  -->
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <van-tabbar route>
      <van-tabbar-item to="/layout/article">
        <span>自定义</span>
        <template #icon="props">
          <img :src="props.active ? jd : jdd" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/collect">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/layout/like">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/layout/user">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import jd from './img/jd.jpg'
import jdd from './img/jdd.jpg'
export default {
  name: 'layout-page',
  props: {},
  components: {},
  data () {
    return {
      jd,
      jdd
    }
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.layout-page {
  padding-bottom: 70px;
}
</style>
