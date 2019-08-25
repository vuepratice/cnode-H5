<template>
  <div class="footer">
    <ul class="tabs">
      <li :class="['tab', path === tab.link ? 'active': '']" v-for="tab in tabs" :key="tab.name">
        <router-link :to="tab.link">{{tab.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        { name: '首页', icon: '', link: '/' },
        { name: '消息', icon: '', link: '/message' },
        { name: '我的', icon: '', link: '/my' }
      ]
    }
  },
  computed: {
    path () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
  }
  .tabs {
    box-shadow: 2px 3px 10px #888;
  }
  .tab {
    display: inline-block;
    width: 33.33%;
    height: 80px;
    line-height: 80px;

    box-sizing: border-box;
    background-color: #f4f4f4;
    &.active {
      background-color: $primaryColor;
      a {
        color:#fff;
      }
    }
    a {
      color: #333;
    }
  }
</style>
