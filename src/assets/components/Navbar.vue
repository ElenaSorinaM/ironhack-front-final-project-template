<template>
  <nav
    class="relative flex flex-row flex-wrap  justify-between items-center
    bg-emerald-700"
  >   
    <div class="m-5 text-slate-50 hover:text-slate-300 focus:text-slate-400">
      <h3 class="text-xl font-semibold font-sans cursor-pointer">Mi planta feliz</h3>
    </div>

    <div class="m-5">
      <ul>
        <li
          class="text-xl font-sans text-slate-50 hover:text-slate-300 focus:text-slate-400"
          @click="logOutOk"
        >
          <p class="cursor-pointer">Logout</p>
        </li>
      </ul>
    </div>
  </nav>
  <div v-if="error" class="text-red-600" role="alert">
    <span>{{ this.errorMessage }}</span>
  </div>
</template>

<script>
import { useUserStore } from "../../store/user";

export default {
  name: "navbar",
  setup() {
    const user = useUserStore();
    return { user };
  },
  data() {
    return {
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    async logOutOk() {
      try {
        await this.user.signOut();
        this.$router.go();
      } catch (e) {
        this.error = true;
        this.errorMessage = "Oops ha passado algo!";
      }
    },
  },
};
</script>

<style></style>
