<template>
	<div>
		<h1>Todo important</h1>
		<TodoItem v-for="(t, index) in todos" :key="index" :todo="t"></TodoItem>
		<!--<TodoItem v-for="(item, i) in todos" :key="i" v-bind:todo="item"></TodoItem>-->
	</div>

</template>

<script>
import TodoItem from './TodoItem'
import TodoService from '../service/TodoService'
export default{
	data(){
		return{
			todos:[]
		}
	},
	conponents:{
		TodoItem
	},
	async mounted(){
	try{
	const importantTodo = await TodoService.getImportantTodos()
	console.log(importantTodo)
	importantTodo.forEach(todo=>{
		this.todos.push(todo.data());
	});
	}catch(e){
		console.log(e)
	}
	},
}
</script>