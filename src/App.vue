<template>
	<div id="app">
		<header>
			<router-link to="/" exact>首页</router-link>
			<router-link to="/components">components</router-link>
			<router-link to="/task">task</router-link>
		</header>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 20px;
	}
	header{
		height: 50px;
		line-height: 50px;
		background: #ccc;
		margin: 15px;
	}
	a{
		color: #000;
		font-size: 25px;
		margin:  20px;
	}
	a:link{
		text-decoration: none;
	}
	.abc {
		color:blue;
	}
	
</style>