<template>
	<div>

		<div>任务管理器</div>
		<!--实现过渡效果的第一步，所有需要被过渡的元素都需要放在整个标签下面-->
		<transition name="one">
			<div v-if="flag" class="blue">12321</div>
		</transition>
		<button @click="view">{{ str }}</button>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: true,
				str: "显示"
			}
		},
		methods: {
			view: function() {
				this.flag = !this.flag;

				if(this.flag) {
					this.str = "显示"
				} else {
					this.str = "影藏"
				}

			}
		}
	}
</script>

<style scoped>
	/*
	 * 
    v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。

    v-enter-active: 定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

    v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效（于此同时 v-enter 被删除），在 transition/animation 完成之后移除。

    v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。

    v-leave-active: 定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

    v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效（于此同时 v-leave 被删除），在 transition/animation 完成之后移除。

	 * 
	 * */
	/*
	 定义过渡时间和需要过渡的属性
	 * */
	
	.blue {
		color: red;
	}
	
	.one-leave-active,
	.one-enter-active {
		transition: all 2.5s linear;
	}
	
	.one-enter,
	.one-leave-to {
		transform: translateX(200px);
		opacity: 0;
		color: blue;
	}
</style>