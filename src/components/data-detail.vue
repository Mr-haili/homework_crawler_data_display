<template>
  <div class="data-detail">
    <div v-if="data">
      <!-- Page Header -->
      <header class="masthead">
        <div class="overlay"></div>

        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="post-heading">
                <h1>{{ data.title }}</h1>
                <p class="">来源url: {{ data.url }}</p>

                <div class="clearfix">
                  <span class="">发布时间: {{ data.published_date }}</span>
                  <span class="">作者: {{ data.author }}</span><br/>
                  <span class="">频道: {{ data.channel }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Post Content -->
      <article class="blog-content">
        <div class="container">
          <div class="row">
            <div 
              class="col-lg-8 col-md-10 mx-auto"
              v-html="data.content">
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import global from '@/global';

export default {
  name: 'DataDetail',
  data () {
    return {
      data: {}
    }
  },
  created(){
    this.initData();
  },
  watch: {
    '$route': 'initData'
  },
  methods: {
    getDetail(id){
      this.data = global.dataList[id];
    },
    initData(){
      const id = this.$route.params.id;
      this.getDetail(id);
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/main";

.blog-content {
  margin-top: 20px;
  text-align: justify;
  word-break: break-all;
}

.post-heading{
  text-align: left;
}
</style>
