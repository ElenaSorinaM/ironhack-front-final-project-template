<template>
  <body class="bg-white">
    <div class="flex min-h-screen bg-white">
      <div
        class="w-1/2 bg-cover md:block hidden"
        style="
          background-image: url(https://cdn.pixabay.com/photo/2017/03/31/15/34/cactus-2191647_960_720.jpg);
        "
      ></div>

      <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div class="text-left p-0 font-sans">
          <h1 class="text-gray-800 text-2xl font-medium">
            Accede a tu cuenta y cuida tus plantas con nosotrxs
          </h1>
        </div>
        <form @submit.prevent="signInSuccess" class="p-0">
          <div class="mt-5">
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="Correo Electrónico"
              class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            />
          </div>

          <div class="mt-5">
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="Contraseña"
              class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            />
          </div>

          <div class="mt-10">
            <input
              type="submit"
              value="Iniciar sesión"
              class="py-3 bg-emerald-500 text-white w-full rounded hover:bg-emerald-700"
            />
          </div>
        </form>
        <!--cambiar ¿No tienes una cuenta? 
            <a class="" href="./SignUp.vue" data-test="Link"><span class="block  p-5 text-center text-gray-800  text-xs ">¿No tienes una cuenta?</span></a>-->
        <div v-if="error" class="text-red-600" role="alert">
          <span class="block">{{ this.errorMessage }}</span>
        </div>
        <!-- <SignUpButton :signup="signUpPage"/> -->
        <slot></slot>
      </div>
    </div>
  </body>
</template>

<script>
import { useUserStore } from "../../store/user";

export default {
  name: "SignIn",
  setup() {
    const user = useUserStore();
    return { user };
  },
  props: {
    signUpPage: Boolean,
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMessage: "",
      SignUpButton: true,
    };
  },
  methods: {
    async signInSuccess() {
      try {
        await this.user.signIn(this.email, this.password);
        this.$router.push({ path: "/" });
      } catch (e) {
        this.error = true;
        this.errorMessage = "El correo o la contraseña es inválido";
      }
    },
  },
  components: {},
};
</script>

<style></style>
