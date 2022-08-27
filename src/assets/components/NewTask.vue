<template>
    <div class="flex-col bg-white">
        <div>
            <form @submit.prevent="createNewTask">
                <input 
                    v-model="newTask" 
                    id="new-task"
                    type="text" 
                    placeholder="Enter task" required />
                    <button type="submit" class="btnfocus:outline-none text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit</button>
            </form>
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
        };
    },
    methods: {
        createNewTask() {
           this.newTask = !this.newTask
        }
    }
}
</script>

<style>

</style>