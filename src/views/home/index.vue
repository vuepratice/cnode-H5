<template>
  <div>
    <Navbar/>
      <!-- 主题列表 -->
      <Topic/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Topic from '@/components/Topic'
import Footer from '@/components/Footer'
import { getTopic } from '@/api'
export default {
  components: { Topic, Footer, Navbar },
  data () {
    return {
      list: [] // 数据列表
    }
  },
  created () {
    getTopic({ page: 1, tab: '', limit: 20 }).then((res) => {
      console.log(res)
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
