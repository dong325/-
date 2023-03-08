<template>
	<div class="common-layout">
		<el-container>
			<el-header class="header">
				<el-menu
				    class="el-menu-demo"
				    mode="horizontal"
				    :ellipsis="false"
					:router="true"
				  >
				    <el-menu-item index="0">LOGO</el-menu-item>
				    <div class="flex-grow" />
				    <el-menu-item index="1"><el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      /></el-menu-item>
					<el-menu-item index="/ceshi2" @click="deletLogin">退出登录</el-menu-item>
				    <!-- <el-sub-menu index="2">
				      <template #title>Workspace</template>
				      <el-menu-item index="2-1">退出登录</el-menu-item>
				    </el-sub-menu> -->
				  </el-menu>
			</el-header>
			<el-container>
				<el-aside width="200px" class="aside">
					<el-col>
						<!-- <h5 class="mb-2">Default colors</h5> -->
						<el-menu class="el-menu-vertical-demo" @open="handleOpen"
							@close="handleClose" :default-active="activeIndex" @select="handleSelect" :router="true">
							<el-menu-item index="/UserManagerment">
								<el-icon>
									<User />
								</el-icon>
								<span>账号管理</span>
							</el-menu-item>
							<el-sub-menu index="/1">
								<template #title>
									<el-icon>
										<Stamp />
									</el-icon>
									<span>会员管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="/Member">会员信息</el-menu-item>
								</el-menu-item-group>
								<!-- <el-sub-menu index="1-4">
									<template #title>item four</template>
									<el-menu-item index="1-4-1">item one</el-menu-item>
								</el-sub-menu> -->
							</el-sub-menu>
							<!-- <el-menu-item index="/Member">
								<el-icon>
									<location />
								</el-icon>
								<span>会员信息</span>
							</el-menu-item> -->
						</el-menu>
					</el-col>
				</el-aside>
				<el-main class="main">
					<div class="Breadcrumb">
						<NavHeadVue></NavHeadVue>
					</div>
					
					<router-view/>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script setup lang="ts">
	import {
		Document,
		Menu as IconMenu,
		Location,
		Setting,
		User,
		Stamp,
	} from '@element-plus/icons-vue'
	import { ref,reactive } from 'vue'
	import router from 'vue-router'//1.引入路由
	import { ArrowRight } from '@element-plus/icons-vue'
	import NavHeadVue from "../views/NavHeadView.vue"
	const handleOpen = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const handleClose = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const activeIndex = ref("");
	//使用reactive可以重新赋值
	// const data = reactive({
	// 	activeIndex:"/UserManagerment",
	// })
	const activeSelect=localStorage.getItem("select");
	if(!activeSelect){
		localStorage.setItem("select","/UserManagerment");
		//之前一直不知道怎么重新赋值，现在这样就可以重新赋值
		activeIndex.value =ref("/UserManagerment");
	}else{
		activeIndex.value = ref(activeSelect);
	}
	const handleSelect = (key: string, keyPath: string[]) => {
	  console.log(key, keyPath)
	
	  localStorage.setItem("select",key);
	  
	}
	
	
	const BreadcrumbSelect=(key:string,keyPath:string[])=> {
		console.log(key, keyPath)
	}
	//退出登录
	const deletLogin=()=> {
		localStorage.removeItem("token");
		localStorage.removeItem("select");
		localStorage.removeItem("PageNum");
	}
</script>
<style lang="less">
	* {
		padding: 0;
		margin: 0;
	}
	.flex-grow {
	  flex-grow: 1;
	}
	nav {
		padding: 30px;
		display: flex;
		flex-direction: column;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}

	.header> {
		height: 10vh;
		color: black;
		// background-color: aquamarine;
	}

	.aside> {
		// height: 80vh;
		// background-color: green;
	}

	.main> {
		// height: 80vh;
		// background-color: yellowgreen;
		padding-top: 0px;
		border-left: 1px solid gainsboro;
		.Breadcrumb> {
			// background: #42b983;
		}
	}

</style>
