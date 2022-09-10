<template>
  <tr class="border-b">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {{ task.title }}
    </td>
    <!--edit task-->
    <td v-if="!wantToEdit" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      <button @click.prevent="toggleWantToEdit" class="px-3"><span class="fa fa-pen"></span></button>
    </td>
    <td v-else>
      <form v-on:submit.prevent="editTaskTitle">
       
        <input
          class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900" 
          v-model="editT"
          id="edit-T"
          type="text"
          placeholder="escribe aquí para editar"
        />
        <button type="submit" class="px-2">
          <span class="fa fa-check"></span>
        </button>
      </form>
    </td>
    <!--task complete -->
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      <button v-if="isComplete" @click.prevent="toggleIsComplete" class="px-4">
        <span class="fa-regular fa-circle-check"></span>
      </button>
      <button v-else @click.prevent="toggleIsComplete" id="unDone" class="px-4">
        <span class="fa-regular fa-circle"></span>
      </button>
    </td>
    <!-- delete task -->
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      <button @click.prevent="cancelTask" class="px-4">
        <span class="fa fa-trash"></span>
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
    isComplete: Boolean,
  },
  data() {
    return {
      wantToEdit: false,
      editT: "",
      wantToDelete: true,
    };
  },

  methods: {
    editTaskTitle() {
      this.taskStore.editTask(this.editT, this.taskId);
      this.wantToEdit = false;
      this.editT = "";
    },

    cancelTask() {
      console.log("cancelTask")
      this.taskStore.deleteTask(this.taskId);
    },
    toggleWantToEdit() {
      this.wantToEdit = !this.wantToEdit
      this.editT = this.task.title
    },

    toggleIsComplete() {
      try {
        console.log("Iscomplete method", !this.isComplete);
        this.taskStore.editStatus(this.taskId, !this.isComplete);
        
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>
