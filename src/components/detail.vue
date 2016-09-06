<style lang="sass">
.detail-content {
	height: 300px;
	.box {
		height: 55px;
	}
}

</style>

<template>
<div class="detail-content">
	<header-bar :title="titleMsg" :subtitle="subtitleMsg"></header-bar>
	<div class="box"></div>
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
		}
	},
	components: {
  	HeaderBar, 
	}

}
</script>


