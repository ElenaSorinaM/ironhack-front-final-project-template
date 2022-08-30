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
    async addTasks (taskTitle, userId){
      try {
       const { data, error } = await supabase 
      .from("tasks").insert([
        {
          title: taskTitle,
          is_complete: false,
          user_id: userId, 
        },
      ]);
      return data;
    } catch (error) {
      console.log(error.message)
    }
  },
    // Hacer el PUT (edit)
    

    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)

    
    //no funciona
    //async editStatus (isCompleted, completed){
    //  try{
    //    const {data} = await supabase
    //    .from("tasks")
    //    .update ({is_complete: completed})
    //    .match({id: isCompleted});
    //    this.fetchTasks();
    //  return data;
    //} catch (error) {
    //  console.log(error.message)
    //}
    
  //}
  },
});
