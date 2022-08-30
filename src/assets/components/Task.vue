<template>
  
    <tr class="border-b">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ task.title }}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" @click="edit"> 
        <button class="fa fa-pen"></button>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" @click="completed">
         <button v-if="isCompleted" class="fa-regular fa-circle-check"></button><button v-else class="fa-regular fa-circle"></button>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <button class="fa fa-trash"></button> 
      </td>
     
    </tr>
  
</template>

<script>
import { useTaskStore } from "../../store/task";
import { useUserStore } from "../../store/user";

export default {
  name: "Task",
  setup() {
    const task = useTaskStore();
    const user = useUserStore();
    return { task, user };
  },
    props: {
        task: Object
    },
    data(){
      return {
        isCompleted: false,
      }
    },
    // no me sale el estatus con los iconos
    // borrado la el PUT (cambiar entre completada y pendiente) en task.js 
     methods: {
     // completed(){
     //   if(this.isCompleted = !this.isCompleted){
      //    return true
      //  } else {
      //    return false;
      //  }
    //  }
    },
};

</script>

<style></style>
