<style lang="sass">
$bgColor: #ebebeb;

body {
  background-color: $bgColor;
  margin: 0;
}

.parent {

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
			titleMsg: '一级标题',
			subtitleMsg: '二级标题'
		}
	},
	components: {
  	HeaderBar, 
	}
}

</script>