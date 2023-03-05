<template>
  <ul v-show="active === 'news'">
    <li v-for="article in ArticleList" :key="article.id">
      <van-cell :label="`点赞 ${article.likeCount} | 浏览 ${article.views}`">
        <template #title>
          <div class="top">
            <img :src="article.avatar" alt />
            <div class="right-box">
              <p>{{article.stem}}</p>
              <p class="line-2">{{article.creator}} | {{article.createdAt}}</p>
            </div>
          </div>
          <p class="bottom" v-html="article.content"></p>
          <!-- <p class="bottom">{{article.content}}</p> -->
        </template>
      </van-cell>
    </li>
  </ul>
</template>

<script>
import { getArticleList } from '@/api/article'
export default {
  name: 'new-com',
  props: {
    active: {
      type: String,
      required: true
    }
  },
  components: {},
  data () {
    return {
      ArticleList: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getArticleListRecom()
  },
  methods: {
    async getArticleListRecom () {
      const { data } = await getArticleList()
      this.ArticleList = data.data.rows
      console.log(this.ArticleList)
    }
  }
}
</script>

<style lang="less" scoped>
// 文章列表样式
ul {
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
    // 不能用padding，原因：不能让用户看到下面文字内容
    margin: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
