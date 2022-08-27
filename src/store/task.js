// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data, error } = await supabase
        .from("tasks")
        .select()
      this.tasks = data;
      if(error) console.log(error)
      console.log(this.tasks)
      console.log(data)
      return this.tasks;
    },
    // Hacer POST
    // Hacer el PUT (edit)
    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
