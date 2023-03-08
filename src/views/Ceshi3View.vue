<template>
	<div class="top">
		<el-col style="width: 200px;">
			<el-row class="tac">
				<el-col>
					<h5 class="mb-2">Default colors</h5>
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
						<el-sub-menu index="1">
							<template #title>
								<el-icon>
									<location />
								</el-icon>
								<span>Navigator One</span>
							</template>
							<el-menu-item-group title="Group One">
								<el-menu-item index="1-1">item one</el-menu-item>
								<el-menu-item index="1-2">item two</el-menu-item>
							</el-menu-item-group>
						</el-sub-menu>
					</el-menu>
				</el-col>
			</el-row>
		</el-col>
	</div>
	<div style="margin-bottom: 20px">
		<el-button size="small" @click="addTab(editableTabsValue)">
			add tab
		</el-button>
	</div>
	<el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab">
		<el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
			{{ item.content }}
		</el-tab-pane>
	</el-tabs>
	<div>
		<el-menu :default-active="this.$router.path" router mode="horizontal">
			<el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
				{{ item.navItem }}
			</el-menu-item>
		</el-menu>
	</div>
</template>
<script lang="ts" setup>
	import {
		ref
	} from 'vue'
	//导航栏
	import {
		Document,
		Menu as IconMenu,
		Location,
		Setting,
	} from '@element-plus/icons-vue'
	const handleOpen = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const handleClose = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}


	//面包屑
	let tabIndex = 2
	const editableTabsValue = ref('2')
	const editableTabs = ref([{
			title: 'Tab 1',
			name: '1',
			content: 'Tab 1 content',
		},
		{
			title: 'Tab 2',
			name: '2',
			content: 'Tab 2 content',
		},
	])

	const addTab = (targetName: string) => {
		const newTabName = `${++tabIndex}`
		editableTabs.value.push({
			title: 'New Tab',
			name: newTabName,
			content: 'New Tab content',
		})
		editableTabsValue.value = newTabName
	}
	const removeTab = (targetName: string) => {
		const tabs = editableTabs.value
		let activeName = editableTabsValue.value
		if (activeName === targetName) {
			tabs.forEach((tab, index) => {
				if (tab.name === targetName) {
					const nextTab = tabs[index + 1] || tabs[index - 1]
					if (nextTab) {
						activeName = nextTab.name
					}
				}
			})
		}

		editableTabsValue.value = activeName
		editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
	}
	const navList: any[] = [{
			name: '/',
			navItem: '发现项目'
		},
		{
			name: '/ceshi2',
			navItem: '社区动态'
		},
	];
</script>
<style>
	.demo-tabs>.el-tabs__content {
		padding: 32px;
		color: #6b778c;
		font-size: 32px;
		font-weight: 600;
	}
</style>
