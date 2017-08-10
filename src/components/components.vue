<template>
	<div id="components">
		<router-link to = "/components" exact>page1</router-link>
		<router-link to = "/components/page2">page2</router-link>
		<router-link to = "/components/page3">page3</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
	#components{
		height: 50px;
		line-height: 50px;
		background: #fcc;
	}
</style>