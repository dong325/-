<template>
	<el-row class="wrap" :gutter="24">
		<el-col :xs="24" :sm="19" :md="12" :lg="3" :xl="6" class="myclass1">123</el-col>
		<el-col :xs="24" :sm="5" :md="12" :lg="3" :xl="6" class="myclass2">456</el-col>
		<el-col :xs="24" :sm="5" :md="12" :lg="3" :xl="6" class="myclass2">456</el-col>
		<el-col :xs="24" :sm="19" :md="12" :lg="3" :xl="6" class="myclass1">123</el-col>
		<el-col :xs="24" :sm="19" :md="12" :lg="3" :xl="6" class="myclass1">123</el-col>
		<el-col :xs="24" :sm="5" :md="12" :lg="3" :xl="6" class="myclass2">456</el-col>
		<el-col :xs="24" :sm="19" :md="12" :lg="3" :xl="6" class="myclass1">123</el-col>
		<el-col :xs="24" :sm="5" :md="12" :lg="3" :xl="6" class="myclass2">456</el-col>
	</el-row>
</template>
<style lang="less">
	.wrap> {
		.myclass1> {
			background-color: rebeccapurple;
			height: 5vh;
			display: flex;
			justify-content: center;
		}

		.myclass2> {
			background-color: green;
			height: 5vh;
		}

	}
</style>
