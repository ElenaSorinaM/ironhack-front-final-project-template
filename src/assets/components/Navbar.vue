<template>
<nav class="flex justify-around text-black">
    <div>
        <a class="text-black no-underline" href="/">HOME</a>
    </div>
    <div>
        <ul>
            <li class="inline text-black no-underline" @click="logOutOk">
                Logout
            </li>
        </ul>
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