<template>
  <div class="pl-3 text-light m-2" syle="border-radius : 5px" :class="[todo.checked ? 'bg-success' : 'bg-primary']">       
      <input v-model="todo.checked" type= "checkbox" @click="$emit('update-checked', !todo.checked,todo.id)" />   
      <i class="bi bi-star-fill" v-if="todo.isImportant"></i>
      <i class="bi bi-alarm"> </i>
      {{ capitalizeTitle }} <span>{{formattedDate}}</span>
      <timeago :datetime="todo.createdAt" :auto-update="5"></timeago>
      <TodoAction @ubahItemc="$emit('ubahItemp')" @delItemc="$emit('delItemp')" :checked="todo.checked"></TodoAction>
  </div>
</template>

<script>
import TodoAction from './TodoAction.vue'
import {format} from 'timeago.js'
export default {
  name: 'TodoItem',
  props : ['todo'],
  data(){
      return{
          checked:false
      };
  },
  methods: {
    
  },
  computed:{
    capitalizeTitle: function(){
    //return this.todo.title.replace(/./,x=>x.toUpperCase());
    //return this.todo.title.replace(/^./, x=>x.toUpperCase());
    const words = this.todo.title.split(" ");
      const capitalizeWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1)
      })
      return capitalizeWords.join(" ");

    },
    formattedDate(){
    return format(this.todo.created_at)
    }
  },
  components: {
    TodoAction
  }  
};
</script>

<style scoped> 
</style>