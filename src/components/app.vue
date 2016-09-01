<style lang="sass">
$bgColor: #F6F6F6;

body {
  background-color: $bgColor;
  margin: 0;
}
.parent {
	height: 200px;
	background-color:#74A39D;
}
</style>

<template>
	<div id="app">
    <header-bar :title="titleMsg" :subtitle="subtitleMsg"></header-bar>
    <router-view class="parent"></router-view>
  </div>
</template>


<script>
import HeaderBar from './layout/HeaderBar.vue'

export default {
	data() {
		return {
			titleMsg: '大标题',
			subtitleMsg: '二级标题'
		}
	},
	components: {
  	HeaderBar, 
	}
}

</script>