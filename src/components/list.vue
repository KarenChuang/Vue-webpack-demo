<style lang="sass">
.list-content {
	display: flex;
	flex-direction: column; //决定主轴的方向,它怎么排，主轴就怎么排
	// justify-content: center;
	align-items: center; //在交叉轴上，也就是现在的水平方向
}
.item-img {
	height:100%;
  margin-right: 1em;
}
.list-item {
	width: 90%;
	display: flex;
	height: 80px;
	background: #F6D595;
	margin: 10px 0 10px 0;
}
.item-text {

}
</style>

<template>
	<div class="list-content">
		<div class="list-item" v-for="item in lists">
			<img class="item-img" src=".././assets/kanshan.jpg" 
					 alt="kanshan">
			<p class="item-text">{{ item.text }}</p>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			lists: [
				{
					text: '单页应用非常的简单，使用 Vue.js 开发，整个应用已经被拆分成了独立的组件。在使用 vue-router 时，我们需要做的就是把路由映射'
				},
				{
					text: '单页应用非常的简单，使用 Vue.js 开发，整个应用已经被拆分成了独立的组件。在使用 vue-router 时，我们需要做的就是把路由映射'
				}
			]
		}
	}
}
</script>


