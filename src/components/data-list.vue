<template>
  <div class="container">
    <div class="data-list-wrapper">
      <ul class="data-list clearfix">
        <li v-for="(dataItem, index) in dataList" class="data-item clearfix">
          <a class="pic">
            <img src="https://www.4paradigm.com/localImage/logo.svg">
          </a>

          <div class="detail">
            <div 
              class="news-title" 
              @click="jumpToDataDetail(index)">
              <h3>{{ dataItem.title }}</h3>
            </div>

            <div class="font-sm">
              <span class="news-author">作者: {{ dataItem.author }}</span><br/>
              <span class="news-url">来源url: {{ dataItem.url }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import global from '@/global';
import * as PATH_NAMES from '@/router/path-names';

export default {
  name: 'DataList',  
  data () {
    return {
    }
  },
  computed: {
    dataList: () => global.dataList
  },
  methods: {
    jumpToDataDetail(id){
      this.$router.push({
        name: PATH_NAMES.DATA_DETAIL, 
        params: { id }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/main";

$data-list-wrapper-width: 600px;
$data-pic-width: 140px;
$data-detail-margin-left-width: 15px;
$data-detail-width: $data-list-wrapper-width - $data-pic-width - $data-detail-margin-left-width;

.data-list-wrapper {
  position: relative;  
  width: $data-list-wrapper-width;
}

.data-list {
  text-align: left;
}

.data-item {
  padding: 15px 0;
  background: #fff;
  border-bottom: 1px solid $black-light;  
}

.data-item:first-of-type {
  border-top: 1px solid $black-light;
}

.data-item .pic {
  float: left;
  display: block;
  width: $data-pic-width;
  height: 88px;
  overflow: hidden;
}

.data-item .detail {
  float: left;
  margin-left: $data-detail-margin-left-width;  
  width: $data-detail-width;
  display: block;
}

.news-title h3 {
  padding-bottom: 14px;  
  min-height: 40px;
  color: #404040;
  text-decoration: none;
  font: normal 20px/26px "Microsoft Yahei";  
}

.news-title h3:hover {
  color: #f34540;
}

.news-url {
  word-break: break-all;
}
</style>
