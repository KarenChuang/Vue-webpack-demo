<style lang="sass">
$bgColor: rgb(230,230,230);

body {
  background-color: $bgColor;
  margin: 0;
}
</style>

<template>
	<div id="app">
    
    <router-view class="parent"></router-view>
  </div>
</template>


<script>
import HeaderBar from './layout/HeaderBar.vue'

export default {
	data() {
		return {
			titleMsg: '法治东航',
			subtitleMsg: '二级标题'
		}
	},
	components: {
  	HeaderBar, 
	}
}

</script>