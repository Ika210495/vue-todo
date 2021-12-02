<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{name:'all'}">TODO</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
     <router-link :to="{name:'completed'}" class="nav-item nav-link">completed</router-link>
     <router-link :to="{name:'important'}" class="nav-item nav-link">important</router-link>
     <router-link :to="{name:'contohvuex'}" class="nav-item nav-link">Contoh Vuex</router-link>
    </div>
  </div>
    </nav>
      <div class="card m-5">
        <div class="card-title p-3">
          <h1> Simple Todo</h1><br/>
        </div>
        <!--<Todo></Todo>-->
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
export default {
  name: 'App',
  data(){
    return{
      newTodo : "",
      todos : []
    }    
  },
  methods:{
    addTodoItem : function(){
      const todo = this.newTodo
      this.todos.push(todo)
      this.newTodo = ""
    }
  },
  components: {
    Todo
  }  
}
</script>