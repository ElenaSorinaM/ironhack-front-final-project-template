<template>
  <section class="h-100 flex flex-col justify-between">
  <Navbar /> 
  <div>
    <div class="text-center py-10 font-sans">
    <h2 class="text-gray-800 text-5xl font-medium">Mi lista de tareas</h2>
  </div>
  
    <NewTask @postTask="getTasks" />
    <div class="flex flex-col font-sans">
      <div class="overflow-x-auto">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left w-1/2"
                  >
                    
                  </th>
                  
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left w-1/5"
                  >
                    Editar
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Estado
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Elimina
                  </th>
                </tr>
                
                <h2 class= "w-full text-left font-bold	">Pending</h2>
                <Task
                  v-for="task in pendingTasks"
                  :taskId="task.id"
                  :key="task.index"
                  :task="task"
                  :isComplete="task.is_complete"
                  @somethingChanged="getTasks"

                />
                <br>
                <h2 class= "w-full text-left font-bold	">Completed</h2>
                <Task
                  v-for="task in completedTasks"
                  :taskId="task.id"
                  :key="task.index"
                  :task="task"
                  :isComplete="task.is_complete"
                  @somethingChanged="getTasks"
                />
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div> 
  
  
  
  <Footer />
  </section>
</template>

<script>
import Navbar from "../assets/components/Navbar.vue";
import NewTask from "../assets/components/NewTask.vue";
import Task from "../assets/components/Task.vue";
import { useTaskStore } from "../store/task";
import Footer from "../assets/components/Footer.vue";

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
    Footer
},
  data() {
    return {
      tasks: [],
      completedTasks: [],
      pendingTasks: []
    };
  },
  methods: {
    async getTasks() {
      console.log('Something changed')
      const tasks = await this.task.fetchTasks();      
      this.tasks = tasks;
      this.completedTasks = tasks.filter(task => task.is_complete === true);
      this.pendingTasks = tasks.filter(task => task.is_complete === false);
      console.log(this.tasks);
    },
  },
  async mounted() {
    await this.getTasks();    
  },
};
</script>

<style>

</style>
