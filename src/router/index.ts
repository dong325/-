import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import axios from 'axios';
const router = createRouter({
    history: createWebHistory(),
    routes
})
//导航守卫、路由守卫、路由拦截
router.beforeEach((to,from,next) => {
	// console.log(to);
	// console.log(from);
	// next();
	//验证token，只有存在token的时候，菜鸟跳转到页面
	let token=localStorage.getItem('token');
	if(token || to.path=== "/ceshi2"){
		axios.post('https://443409hb31.imdo.co/index.php/verifyToken', {
			token:localStorage.getItem("token")
		}).then(res => {
			// console.log(res.data);
			// console.log(res.data[0][0]['username']);
			// window.location.href="/";
			if(res.data==0){
				localStorage.removeItem('token');
				next("/ceshi2");
			}
			next();
		}).catch(err => {
			//添加错误，这里也会显示
			console.log("获取数据失败" + err);
			next();
		})
		next();
	}else{
		next("/ceshi2");
	}
})
export default router
