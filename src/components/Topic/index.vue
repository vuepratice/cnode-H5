<template>
  <div>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :label="item.name"
        :name="item.tab"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {name: '全部', tab: 'all'},
        {name: '精华', tab: 'good'},
        {name: '分享', tab: 'share'},
        {name: '问答', tab: 'ask'},
        {name: '招聘', tab: 'job'},
        {name: '客户端测试', tab: 'test'}
      ],
      activeName: 'all'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
<style lang="scss">
.el-tabs__item {
  height: 80px;
  line-height: 80px;
  font-size: 30px;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
  color: #FFF;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
  background-color: #80bd01;
}
.el-tabs--border-card>.el-tabs__content {
  padding: 0;
}
</style>
