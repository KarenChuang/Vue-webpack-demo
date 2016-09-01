<style lang="sass">
	header {
		background: #555;
		color: #fff;
		padding:20px;
		span {
			display: block;
		}
		.title {
			font-size: 18px;
		}
		.sub-title {
			font-size: 14px;
		}
	}
</style>

<template>
	<header>
		<span class="title">{{ title }}</span>
		<span class="sub-title">{{ subtitle }}</span>
	</header>
</template>

<script>
	export default {
		props: ['title','subtitle'],
	}
</script>