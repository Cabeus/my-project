import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import components from '@/components/components'
import task from '@/components/task'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'

Vue.use(Router)

export default new Router({
	mode: "history",
	linkActiveClass: "abc",
	routes: [{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/components',
			component: components,
			children: [{
					path: '',
					name: 'page1',
					component: page1
				},
				{
					path: 'page2',
					component: page2
				},
				{
					path: 'page3',
					component: page3
				}
			]
		},
		{
			path: '/task',
			name: 'task',
			component: task
		},
		{
			path: '*',
			redirect: {
				path: "/"
			}
		}
	]
})