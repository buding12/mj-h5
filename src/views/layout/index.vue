<template>
  <div class="layout-page">
    <!-- 二级路由  -->
    <router-view></router-view>
    <div>layout底部</div>
  </div>
</template>

<script>
export default {
  name: 'layout-page',
  props: {},
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang="less" scoped></style>
