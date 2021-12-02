<template>
  <div class="float-right">
    <i class="bi bi-pen" @click="$emit('ubahItemc')" v-if="checked"></i><i class="bi bi-trash" @click="$emit('delItemc')" ></i>
  </div>
</template>

<script>
export default {
  name: 'TodoAction',
  props : ['checked'],
  methods: {
    
  }
};
</script>