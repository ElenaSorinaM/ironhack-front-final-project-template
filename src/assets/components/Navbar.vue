<template>
<nav class="relative w-full flex flex-wrap items-center justify-between py-4
 bg-emerald-700 text-slate-50 hover:text-slate-300 focus:text-slate-400 shadow-lg">
    <div class="w-full flex flex-wrap items-center justify-between px-6"> 
        <div class="flex-grow items-center"> 
        <a class="text-xl text-slate-50 hover:text-slate-300 focus:text-slate-400" href="#">Home</a>
    </div>
    <div >
        <ul class="flex flex-col pl-0 list-style-none mr-auto">
            <li class="p-2 text-xl text-slate-50 hover:text-slate-300 focus:text-slate-400" @click="logOutOk">
                Logout
            </li>
        </ul>
    </div>
    </div>
</nav>
<div v-if="error" class=" text-red-600"
            role="alert">
            <span>{{ this.errorMessage }}</span></div>
</template>

<script>
import { useUserStore } from "../../store/user";

export default {
    name: "navbar", 
    setup(){
        const user = useUserStore();
        return { user };
},
 data() {
        return {
            error: false,
            errorMessage: "",
        }
},
methods: {
    async logOutOk() {
    try {
        await this.user.signOut();
        this.$router.go();
    } catch (e) {
        this.error=true;
        this.errorMessage = "Oops ha passado algo!"
    }
}, 
},
};
</script>

<style>

</style>