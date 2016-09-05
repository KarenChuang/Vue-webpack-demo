<style lang="sass">
.list-content {
	display: flex;
	flex-direction: column; //决定主轴的方向,它怎么排，主轴就怎么排
	align-items: center; //在交叉轴上，也就是现在的水平方向
	.box {
		height: 70px;
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
		}
	}
}



</style>

<template>
	<div class="list-content">
		<div class="box"></div>
		<div class="list-item" v-for="item in lists">
			<router-link to="/parent/detail">detail</router-link>
			<img class="item-img"  :src="item.logo_url"
					 alt="kanshan">
			<div class="item-text">
				<span>{{ item.text }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			lists: []
		}
	},
	created () {
    this.$http.get('img.json').then(function(res){
    	this.lists = res.json();
    })
  },
}
</script>


