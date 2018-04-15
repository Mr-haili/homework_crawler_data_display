import Vue from 'vue'
import Router from 'vue-router'
import * as PATH_NAMES from './path-names'

import DataList from '@/components/data-list'
import DataDetail from '@/components/data-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: PATH_NAMES.DATA_LIST,
      component: DataList
    },
    {
    	path: '/data_detail/:id',
    	name: PATH_NAMES.DATA_DETAIL,
    	component: DataDetail
    }
  ],
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
 	}
})
