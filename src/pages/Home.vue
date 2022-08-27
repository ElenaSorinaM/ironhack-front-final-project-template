<template>
  <Navbar />
  <div class="text-center py-10 font-sans">
    <h2 class="text-gray-800 text-5xl font-medium">Mi lista de tareas</h2>
  </div>
  <section>
    <NewTask />
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead class="border-b">
        <tr>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Tarea</th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Status</th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Modifica</th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Elimina</th>
        </tr>
        <Task v-for="task in tasks" :key="task.index" :task="task" />
      </thead>
      <tbody></tbody>
    </table>
    </div>
    </div>
    </div>
    </div>
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
