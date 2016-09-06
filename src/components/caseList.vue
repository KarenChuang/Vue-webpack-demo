<style lang="sass">
.case-list-content {
	.box {
		height: 70px;
	}
	.search {
		margin-top: 10px;
		padding: 0px 10px 0px 10px;
	}
	.folder-list {
		margin-top: 10px;
    border-top: 1px solid #dddada;
    a {
    	display: block;
    	text-decoration: none;
    }
	}
	.folder-item {
		padding:10px;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #dddada;
		color: #333;
		i {
			font-size: 20px;
			color: #1E89E0;
			display: inline;
			margin-left: 10px;
			margin-right: 10px;
		}
	}
  .folder-item:hover {
    background: #F0F0F0;
  }
}

</style>

<template>
<div class="case-list-content">
	<div class="search">
		<el-input placeholder="搜索">
  	<el-button slot="append" >搜索</el-button>
	</div>
	<div class="folder-list">
		<router-link to="/main/caseDetail">
			<div class="folder-item" v-for="item in folders">
				<i class="el-icon-document"></i>
				<span>{{ item.folderName }}</span>
			</div>
		</router-link>

	</div>
</el-input>

</div>
</template>

<script>
import HeaderBar from './layout/HeaderBar.vue'

export default {
	data () {
		return {
			search: '',
			titleMsg: '法治东航',
			subtitleMsg:'',
			folders:[
			{
				"folderName":"合同类7文档"
			},{
				"folderName":"合同类合同类6文档"
			},{
				"folderName":"合同类合同类合同类5文档"
			},{
				"folderName":"合同类4文档"
			},{
				"folderName":"合同类3文档"
			},{
				"folderName":"合同合同类类2文档"
			},{
				"folderName":"合同类1文档"
			},{
				"folderName":"合同类合同类合同类5文档"
			},{
				"folderName":"合同类4文档"
			},{
				"folderName":"合同类3文档"
			},{
				"folderName":"合同合同类类2文档"
			},{
				"folderName":"合同类1文档"
			}
		]
		}
	},
	components: {
  	HeaderBar, 
	}

}
</script>


