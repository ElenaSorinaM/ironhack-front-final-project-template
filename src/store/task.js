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
        .select("*")
        .order("id", { ascending: false });
      this.tasks = data;
      if (error) console.log(error);
      console.log(this.tasks);
      console.log(data);
      return this.tasks;
    },
    // Hacer POST
    async addTasks(taskTitle, userId) {
      try {
        const { data, error } = await supabase.from("tasks").insert([
          {
            title: taskTitle,
            is_complete: false,
            user_id: userId,
          },
        ]);
        //return {
          //message: 'Tarea creada',
          //status: 200,
          //data: data
        //};
      } catch (error) {
        console.log(error.message);
      }
    },

    // Hacer el PUT (edit)
    async editTask(taskTitle, taskId) {
      console.log("Édit task executed");
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ title: taskTitle })
          .match({
            id: taskId,
          });
        this.fetchTasks();
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },

    // Hacer el delete
    async deleteTask(taskId) {
      try {
        const { data, error } = await supabase.from("tasks").delete().match({
          id: taskId,
        });
        this.fetchTasks();
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },

    // Hacer el PUT (cambiar entre completada y pendiente)

    async editStatus(taskId, isCompleted) {
      try {
        const { data } = await supabase
          .from("tasks")
          .update({ is_complete: isCompleted })
          .match({ id: taskId });
        this.fetchTasks();
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
