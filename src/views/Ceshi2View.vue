<template>
	<div class="box">
		
		<div class="login">
			<div>
				<h2>管理员登录</h2>
			</div>
			<div>
				<input type="text" v-model="username">
			</div>
			
			<div>
				<input type="password" v-model="password">
			</div>
			
			<div>
				<input type="button" class="hidden-xs-only" @click="but" value="确定">
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {useRouter} from 'vue-router'
	import {
		ref
	} from 'vue';
	import axios from 'axios';
	const username = ref("");
	const password = ref("");
	
	// 路由
	const router = useRouter()
	const but = () => {
		// console.log(username.value);
		axios.post('https://443409hb31.imdo.co/index.php/token', {
			username: username.value, //可以获取输入框数据
			password:password.value
		}).then(res => {
			console.log(res.data);
			if(res.data==2){
				
				alert("不存在");
			}else if(res.data==0){
				alert("账号或者密码出错");
			}else{
				alert("正确");
				localStorage.setItem('token',res.data);
				router.push("/");
			}
			
			// window.location.href="/";
			
		}).catch(err => {
			//添加错误，这里也会显示
			console.log("获取数据失败" + err);
		})
	}
</script>

<style lang="less">
	*{
		padding: 0;
		margin: 0;
	}
	.box> {
		width: 100vw;
		height: 100vh;
		background:#d5eafc;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.login> {
			h2> {
				margin: 10px 0px;

			}
			background: white;
			width: 400px;
			height: 300px;
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			input> {
				width: 300px;
				height: 30px;
				border-radius: 5px;
				outline: none;
				border: 1px solid gainsboro;
				margin: 5px;
			}
		}
	}
</style>