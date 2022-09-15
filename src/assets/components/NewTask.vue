<template>
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <div class="relative flex flex-wrap items-stretch max-w-full mb-4">
        <form class="inline-flex" @submit.prevent="createNewTask">
          <input
            v-model="newTask"
            id="new-task"
            type="text"
            placeholder="Enter task"
            required
            class="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-500 focus:outline-none"
          />
          <button
            type="submit"
            class="btn inline-block px-6 py-2 border-2 border-emerald-600 text-emerald-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </form>
        <!-- <p v-if="msg">{{msgText}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../../store/task";
import { useUserStore } from "../../store/user";

export default {
  name: "NewTask",
  setup() {
    const task = useTaskStore();
    const user = useUserStore();
    return { task, user };
  },
  data() {
    return {
      newTask: "",
      //msg: false,
      //msgText: ''
    };
  },
  methods: {
    async createNewTask() {
      const userId = this.user.user.id;

      const res = await this.task.addTasks(this.newTask, userId);
      //if(res.status === 200) {
      //  this.msg = true;
      //  this.msgText = res.message
      //}

      this.$emit("postTask");

      this.newTask = "";
    },
  },
};
</script>

<style></style>
