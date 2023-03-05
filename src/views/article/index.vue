<template>
  <div class="article-page">
    <div class="header">
      <ul class="left">
        <li :class="{active:active === 'recom'}" @click="active = 'recom'">推荐</li>
        <li :class="{active:active === 'news'}" @click="active = 'news'">最新</li>
      </ul>
      <van-image class="logo" :src="logo" />
    </div>

    <van-list
      v-show="active === 'recom'"
      class="item-list"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <li v-for="item  in ArticleListRecom" :key="item.id">
        <van-cell :label="`点赞 ${item.likeCount} | 浏览 ${item.views}`">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="top">
              <img :src="item.avatar" alt />
              <div class="right-box">
                <p>{{item.stem}}</p>
                <p class="line-2">{{item.creator}} | {{item.createdAt}}</p>
              </div>
            </div>
            <p class="bottom" v-html="item.content"></p>
          </template>
        </van-cell>
      </li>
    </van-list>
    <article-news :active="active" />
  </div>
</template>

<script>
import logo from './img/logo.png'
// import ArticleItem from './components/article.vue'
import ArticleNews from './components/new.vue'
import { getArticleList } from '@/api/article'
export default {
  name: 'article-page',
  props: {},
  components: {
    ArticleNews
  },
  data () {
    return {
      logo,
      active: 'recom',
      ArticleListRecom: [],
      list: [],
      // 分页
      pageSize: 10,
      current: 1,
      loading: false,
      finished: false
    }
  },
  computed: {},
  watch: {},
  created () {
    // this.getArticleListRecom()
  },
  methods: {
    async onLoad () {
      await this.getArticleListRecom()
      this.current++
      this.loading = false
    },
    async getArticleListRecom () {
      const { data } = await getArticleList({
        sorter: 'weight_desc',
        pageSize: this.pageSize,
        current: this.current
      })
      this.ArticleListRecom = this.ArticleListRecom.concat(data.data.rows)
      // console.log(this.ArticleListRecom)
      if (data.data.padeTotal === data.data.current) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  .header {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    background-color: rgb(254, 254, 254);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    .left {
      display: flex;
      li {
        position: relative;
        line-height: 44px;
        padding: 0 10px;
        color: #888;
        &.active {
          color: #333;
          &::after {
            // 过度：1.谁做动画给谁加 2.什么动画效果谁设置
            transition: width 0.5s;
            content: "";
            width: 14px;
            height: 2px;
            background-color: #222;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
          }
        }
      }
    }
    .logo {
      width: 64px;
    }
  }
}
// 获取文章列表
.item-list {
  margin-top: 40px;
  .top {
    display: flex;
    align-items: center;
    line-height: 1.4;

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .line-2 {
      color: #999;
      font-size: 12px;
    }
  }
  .bottom {
    color: #666;
    margin: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
