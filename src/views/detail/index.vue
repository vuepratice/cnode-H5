<template>
  <div>
    详情
  </div>
</template>

<script>
export default {
  computed: {
    id () { // 在computed里面获取路由的参数，注意是$route
      return this.$route.query.id
    }
  },
  mounted () {
    console.log(this.id)
  }
}
</script>

<style lang="scss" scoped>

</style>
