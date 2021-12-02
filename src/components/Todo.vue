<template>
  <div>
    &nbsp; <input type ="text" v-model = "newTodo.title" autofocus> &nbsp;
    <button @click="addTodoItem" class = "ml-3 btn btn-success" v-if="!isEditMode">Tambah</button>
    <button @click="updateTodoItem" class = "ml-3 btn btn-success" v-else>Tambah</button><br/>
    &nbsp; <input type = "checkbox" v-model = "newTodo.isImportant"> Penting
    <hr>
      <ul>
          <!-- <li v-for="(todo, i) in  todos" :key="i">
            {{todo}}
          </li> -->
          <TodoItem v-for="(item, i) in todos" :key="i" v-bind:todo="item" @delItemp="deleteTodoFromList(item,i)" @ubahItemp="editTodo(item,i)" @update-checked="updateChecked"></TodoItem>
      </ul>
      <loading :active.sync="isLoading"
                 :can-cancel="false"
                 :is-full-page="true"
                 :loader="'dots'"
                 />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import TodoService from '../service/TodoService'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: 'App',
  data(){
    return{
      //newTodo : "",
      newTodo: {
        title: '',
        isImportant: false,
        checked:false,
      },
      todos : [],
      isEditMode:false,
      editIndex: -1,
      isInputError:false,
      isLoading: false,
    }    
  },
 async mounted(){
      try{
          const todoDocs = await TodoService.getAllTodos()
          todoDocs.forEach((todo)=>{ 
          const item = todo.data();
          item.id=todo.id;
          this.todos.push(item)})
      } catch(e){
          console.log("error");
          console.log(e);
      }
    
  },
  methods:{
    updateChecked(isChecked,id){
    const todo={
      checked : isChecked,
      id:id
    }
    TodoService.updateTodo(todo)

    },
    deleteTodoFromList(item,index){
    const answer= confirm("Yakin Ingin Menghapus")
    if(!answer){
      return
    }
      this.isLoading=true;
      TodoService.deleteTodo(item.id)
      .then(()=>{
        this.todos.splice(index,1);
        this.isLoading=false;
      }).catch(e=>{
        this.isLoading=false;
        console.log("error when deleting");
        console.log(e);

    })
   // this.todos.splice(index,1)
    },
    editTodo(item,index){
    const answer= confirm("Yakin Ingin Mengubah")
    if(!answer){
      return
    }
    //this.newTodo={
      //id : item,
      //title:item.title,
      //checked : item.checked,
     // isImportant : item.isImportant
   // }

   let stringItem=JSON.stringify(item)
   this.newTodo=JSON.parse(stringItem)

    //this.newTodo= item merupakan refrent
    this.isEditMode=true  
    this.editIndex=index

    },
    updateTodoItem: async function(){
      if(this.newTodo.title==''){
      this.isInputError=true;
      return
      }
      this.isLoading=true;
      try{
        await TodoService.updateTodo(this.newTodo);
        this.todos[this.editIndex] = this.newTodo;
        this.isLoading=false;
      }catch(e){
        console.log(e);
        this.isLoading=false;
      }

     // this.todos[this.editIndex]=this.newTodo
      this.editIndex=-1
      this.newTodo.isEditMode=false
      this.newTodo={
      title:'',
      isImportant:false,
      checked:false
      }
    },

    addTodoItem : async function(){
      if(this.newTodo.title==""){
          this.IsInputError = true;
          return;
      }
     // const todo = {
          //title : this.newTodo.title,
         // isImportant : this.newTodo.important,
      //}
      const todo=this.newTodo;
      todo.created_at =Date.now();
      this.isLoading=true;
      if (todo == "") {
        alert("Inputan Kosong")
      }
      else{
      try{
          const docTodo = await TodoService.createTodo(todo)
          if(docTodo){
              todo.id = docTodo.id;
              this.todos.push(todo);
          }
          this.isLoading=false;
      } catch(e){
          console.log(e);
          console.log("error")
          this.isLoading=false
      }
      
      //this.todos.push(todo)
      this.newTodo = {
       title :'',
       isImportant: false,
       checked: false,
      };
      this.isInputError=false;
      }
    },
  },
  components: {
    TodoItem,Loading
  }  
}
</script>

<style>

</style>