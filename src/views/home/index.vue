  <template>
  <div>
    <header>
      <Navbar/><!-- 主题列表 -->
      <Topic/> <!-- tab标签列表  -->
    </header>
    <ArticleList :list="list"/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Topic from '@/components/Topic'
import ArticleList from '@/components/ArticleList'
import Footer from '@/components/Footer'
import { getTopic } from '@/api'
export default {
  components: { Topic, Footer, Navbar, ArticleList },
  data () {
    return {
      list: [] // 数据列表
    }
  },
  created () {
    getTopic({ page: 1, tab: '', limit: 20 }).then((res) => {
      console.log(res.data.data)
      this.list = res.data.data
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
</style>
