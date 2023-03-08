<template>
	<el-table :data="tableData" class="table">
		<el-table-column class="col" prop="id" label="ID" />
		<el-table-column prop="level" label="会员等级" />
		<el-table-column prop="price" label="价格" />
		<el-table-column prop="CreationTime" label="创建时间"/>
		<el-table-column prop="AuditStatus" label="审核状态"/>
		<el-table-column prop="AuditStatus" label="审核状态"/>
	</el-table>
	<div class="block">
		<!-- <span class="demonstration">调整每页显示条数</span> -->
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
			v-model:currentPage="currentPage2"
			layout="prev, pager, next,jumper" :total="num">
			<!-- layout="sizes, prev, pager, next" :total="700000"> -->
		</el-pagination>
	</div>
	<!-- <input type="button" @click="but" value="更换"> -->
</template>
<style lang="less">
	.table> {
		width: 100vw;
		height: 450px;
		// display: flex;
		// justify-content: space-between;
		el-table-column> {
			width: 200px;
		}
	}
</style>
<script>
	// import {
	// 	ref,reactive
	// } from 'vue';
import axios from 'axios';
export default {
	data() {
		return {
			tableData:[],
			num:0,

		}
	},
	created(){
		// this.num=2000;
		axios.post('https://443409hb31.imdo.co/index.php/Member', {
			pageNum: 1,
		}).then(res => {
			for (var i = 0; i < res.data[0].length; i++) {
				this.tableData.push(res.data[0][i]);
			}
			// console.log("有多少条数据"+res.data[1]);
			// console.log("当前页"+res.data[2]);
			// console.log("最多有多少页"+res.data[3]);
			// console.log("每一页有多少条"+res.data[4]);
			
			this.num=(res.data[1]-10);
		}).catch(err => {
			//添加错误，这里也会显示
			console.log("获取数据失败" + err);
		})
	},
	methods: {
		handleSizeChange(val){
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val){
			console.log(`当前页: ${val}`);
			axios.post('https://443409hb31.imdo.co/index.php/Member', {
				pageNum: val
			}).then(res => {
				//切换之前需要清除数组中添加的数据
				for (var i = 0; i <10; i++) {
					this.tableData.pop(i);
				}
				for (var i = 0; i < res.data[0].length; i++) {
					this.tableData.push(res.data[0][i]);
				}
				// console.log("成功", res.data[0]);
				// console.log("有多少条数据"+res.data[1]);
				// console.log("当前页"+res.data[2]);
				// console.log("最多有多少页"+res.data[3]);
				// console.log("每一页有多少条"+res.data[4]);

			}).catch(err => {
				//添加错误，这里也会显示
				console.log("获取数据失败" + err);
			})
		},
	}
}
	// const tableData = ref([]);
	// const num= ref();//根据每页显示多少条来显示有多少页
	//使用reactive可以重新赋值
	// const PageData = reactive({
	// 	PageNum:20,
	// })
	// const but = () => {
	// 	tableData.value.push({
	// 		date: '2016-05-03',
	// 		name: 'Tom',
	// 		state: 'California',
	// 		city: 'Los Angeles',
	// 		address: 'No. 189, Grove St, Los Angeles',
	// 	}, {
	// 		date: '2016-05-03',
	// 		name: 'zhangsan',
	// 		state: 'California',
	// 		city: 'Los Angeles',
	// 		address: 'No. 189, Grove St, Los Angeles',
	// 	})
	// 	console.log(tableData.value);
	// }
	// axios.post('https://443409hb31.imdo.co/index.php/Member', {
	// 	pageNum: 0,
	// }).then(res => {
	// 	// for (var i = 0; i < res.data.length; i++) {
	// 	// 	tableData.value.push(res.data[i]);
	// 	// }
	// 	console.log(res.data[1]);
	// 	PageData.PageNum=2000;
	// }).catch(err => {
	// 	//添加错误，这里也会显示
	// 	console.log("获取数据失败" + err);
	// })
	// const num=ref(PageData.PageNum);
	// //分页
	// const currentPage2 = ref(1);
	// const handleSizeChange = (val: any) => {
	// 	console.log(`每页 ${val} 条`);
	// }
	// const handleCurrentChange = (val: any) => {
	// 	// console.log(`当前页: ${val}`);
	// 	// console.log(val);
	// 	axios.post('https://443409hb31.imdo.co/index.php/Member', {
	// 		pageNum: val
	// 	}).then(res => {
	// 		// for (var i = 0; i < res.data.length; i++) {
	// 		// 	tableData.value.pop(i);
	// 		// }
	// 		// for (var i = 0; i < res.data.length; i++) {
	// 		// 	tableData.value.push(res.data[i]);
	// 		// }
	// 		console.log("成功", res.data[1]);

	// 	}).catch(err => {
	// 		//添加错误，这里也会显示
	// 		console.log("获取数据失败" + err);
	// 	})
	// }
</script>
