export const routes = [{
	path: '/',
	name: 'Home',
	redirect: '/UserManagerment',//对应子路由中的name值，默认加载页
	component: () => import(/* webpackChunkName: "Home" */'../views/HomeView.vue'), 
	meta:{
		title:'首页'
	},
	children: [
		{
			path: 'about',
			name: "About",
			component: () => import(/* webpackChunkName: "Home" */'../views/AboutView.vue')
		},
		{
			path: 'ceshi',
			name: 'Ceshi',
			component: () => import('../views/CeshiView.vue')
		},
		{
			path: 'Member',
			name: 'Member',
			component: () => import('../views/MemberView.vue'),
			meta:{
				title:'会员信息'
			},
		},
		//
		{
			path: 'UserManagerment',
			name: 'UserManagerment',
			component: () => import('../views/UserManagementView.vue'),
			meta:{
				title:'账号管理'
			},
		},
	]
},
{
	path: '/ceshi2',
	name: 'Ceshi2',
	component: () => import('../views/Ceshi2View.vue')
},
{
	path: '/ceshi3',
	name: 'Ceshi3',
	component: () => import('../views/Ceshi3View.vue')
},
{
	path: '/ceshi4',
	name: 'Ceshi4',
	component: () => import('../views/Ceshi4View.vue'),
	children: [
		{
			path: 'ceshi4_1',
			name: "ceshi4_1",
			component: () => import(/* webpackChunkName: "Home" */'../views/Ceshi4_1View.vue')
		},
		{
			path: 'ceshi4_2',
			name: "ceshi4_2",
			component: () => import(/* webpackChunkName: "Home" */'../views/Ceshi4_2View.vue')
		},
		{
			path: 'ceshi4_3',
			name: "ceshi4_3",
			component: () => import(/* webpackChunkName: "Home" */'../views/Ceshi4_3View.vue')
		},
	]
},
{
	path: '/ceshi5',
	name: 'Ceshi5',
	component: () => import('../views/Ceshi5View.vue')
},
]
