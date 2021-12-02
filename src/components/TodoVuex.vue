<template>
	<div>
		<h1>{{$store.state.counter}}</h1>
		<button @click="increment"> Tambah 1</button>
	</div>

</template>


<script>
	export default{
		methods:{
		increment(){
			this.$store.commit('incrementCounter');
		}
	},
}
</script>
