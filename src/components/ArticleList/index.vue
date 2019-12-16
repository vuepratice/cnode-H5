<template>
  <div class="article-list-container">
    <div class="article-list-item"
      v-for="item in list"
      :key="item.id"
    >
      <div class="author-img">
        <a :href="item.author_id"><img :src="item.author.avatar_url"></a>
      </div>
      <div class="article">
        <el-tag effect="dark" color="#80bd01">{{item.top?tabZh.top:tabZh[item.tab]}}</el-tag>
        <span class="author-name">作者：{{item.author.loginname}}</span>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {list: Array},
  data () {
    return {
      tabZh: {
        top: '置顶',
        share: '分享',
        ask: '问答',
        good: '精华',
        job: '招聘',
        test: '客户端测试'
      }
    }
  },
  created () { console.log(this.list) }
}
</script>

<style lang="scss">
  .article-list-container {
    height: 100%;
    padding-top: 200px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: #eceff1;
  }
  .article-list-item {
    position: relative;
    margin-bottom: 14px;
    padding: 20px 0 10px 0;
    background-color: #fff;
    font-size: 30px;
    min-height: 100px;
  }
  .author-img {
    position: absolute;
    top: 10px;
    left: 10px;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .article {
    position: relative;
    line-height: 50px;
    margin-left: 120px;
    text-align: left;
    .author-name {
      position: absolute;
      top: 0;
      right: 20px;
    }
    .title {
      padding-right: 80px;
      white-space: nowrap; //不换行
      text-overflow: ellipsis; //超出显示省略号
      overflow: hidden; //超出隐藏
    }
  }
</style>
