<template>
  <Navbar />
  <div class="text-center py-10 font-sans">
    <h2 class="text-gray-800 text-5xl font-medium">Mi lista de tareas</h2>
  </div>
  <section>
    <NewTask />
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th class="border border-slate-600 ...">Tarea</th>
          <th class="border border-slate-600 ...">Status</th>
          <th class="border border-slate-600 ...">#</th>
          <th class="border border-slate-600 ...">#</th>
        </tr>
        <Task v-for="task in tasks" :key="task.index" :task="task" />
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>

<script>
import Navbar from "../assets/components/Navbar.vue";
import NewTask from "../assets/components/NewTask.vue";
import Task from "../assets/components/Task.vue";
import { useTaskStore } from "../store/task";

export default {
  setup() {
    const task = useTaskStore();
    return { task };
  },
  name: "Home",
  components: {
    Navbar,
    NewTask,
    Task,
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    async getTasks() {
      const tasks = await this.task.fetchTasks();
      this.tasks = tasks
    },
  },
  async mounted() {
    await this.getTasks();
  },
};
</script>

<style></style>
