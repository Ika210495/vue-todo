<template>
	<div>
		<h1>Todo Complate</h1>
		<!--<TodoItem v-for="(t, index) in todos" :key="index" v-bind:todo="t"></TodoItem>-->
		<TodoItem v-for="(item, i) in todos" :key="i" :todo="item"></TodoItem>
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
	const completedTodo = await TodoService.getCompletedTodos()
	completedTodo.forEach(todo=>{
		this.todos.push(todo.data())
	})
	}catch(e){

	}
	}
}
</script>