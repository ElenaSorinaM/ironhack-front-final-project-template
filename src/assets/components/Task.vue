<template>
  <tr class="border-b">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {{ task.title }}
    </td>
    <!--edit task-->
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      <!-- <span v-if="!wantToEdit" @click="editPen" class="fa-regular fa-pen">{{ task.title }}</span>  -->
      <form v-on:submit.prevent="editTaskTitle">
        <input
          v-model="editT"
          id="edit-T"
          type="text"
          placeholder="escribe aquí para editar"
        />
        <button type="submit">
          <p>send</p>
        </button>
      </form>
    </td>
    <!--task complete / rehacer -->
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      <span
        v-if="isCompleted"
        @click="completed"
        class="fa-regular fa-circle-check"
      ></span>
      <span v-else class="fa-regular fa-circle"></span>
    </td>
    <!-- delete task / rehacer-->
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      <button @click="cancelTask">
        <span class="fa-regular fa-trash"></span>
      </button>
    </td>
  </tr>
</template>

<script>
import { useTaskStore } from "../../store/task";
import { useUserStore } from "../../store/user";

export default {
  name: "Task",
  setup() {
    const taskStore = useTaskStore();
    const user = useUserStore();
    return { taskStore, user };
  },
  props: {
    task: Object,
    taskId: Number,
  },
  data() {
    return {
      isCompleted: false,
      wantToEdit: false,
      editT: "",
    };
  },

  methods: {
    //editPen() {
    //  this.wantToEdit =!wantToEdit;
    //}
    editTaskTitle() {
       this.taskStore.editTask(this.editT, this.taskId);
    },
    //completed(){
    //  if(this.isCompleted = !this.isCompleted){
    //    return true
    //  } else {
    //    return false;
    //  }
    //},

    //async cancelTask() {
    //  await this.task.deleteTask(this.taskId)
    //}
    //},
   
  },
};
</script>

<style></style>
