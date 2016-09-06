<style lang="sass">
.list-content {
	display: flex;
	flex-direction: column; //决定主轴的方向,它怎么排，主轴就怎么排
	align-items: center; //在交叉轴上，也就是现在的水平方向
	.box {
		height: 55px;
	}
	.list-item {
		width: 90%;
		display: flex;
		height: 90px;
		background: #fff;
		margin: 10px 0 0px 0;
		border-radius: 6px;
		-webkit-box-shadow: -1px 2px 5px 1px rgba(0,0,0,0.34);
		-moz-box-shadow: -1px 2px 5px 1px rgba(0,0,0,0.34);
		box-shadow: -1px 2px 5px 1px rgba(0,0,0,0.34);
		.item-img {
			width: 28%;
			border-radius: 6px;
		}
		.item-text {
			width: 72%;
			background: #fff;
			padding: 8px;
		  box-sizing: border-box;
		  margin-left: -2%;
		  word-wrap: break-word; 
			word-break: normal; 
			overflow: hidden;
			font-size: 18px;
			line-height: 1.2;
			text-decoration: none;
			color: #444;
		}
	}
}

</style>

<template>
	<div class="list-content">
		<header-bar :title="titleMsg" :subtitle="subtitleMsg"></header-bar>
		<div class="box"></div>
		<router-link to="/parent/detail"></router-link>
		<div class="list-item" v-for="item in lists">
			<img class="item-img"  :src="item.logo_url"
					 alt="kanshan">
			<router-link to="/main/detail" class="item-text">
				<span>{{ item.text }}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
import HeaderBar from './layout/HeaderBar.vue'

export default {
	data () {
		return {
			titleMsg: '法治东航',
			subtitleMsg:'',
			lists: []
		}
	},
	created () {
    this.$http.get('img.json').then(function(res){
    	this.lists = res.json();
    })
  },
  components: {
  	HeaderBar, 
	}
}
</script>


