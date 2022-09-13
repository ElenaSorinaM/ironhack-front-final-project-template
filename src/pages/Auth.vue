<template>
  <div>
    <section v-if="accountOk">
      <SignIn>
        <div >
          <input
            type="button"
            v-model="authButton2"
            @click="registerIntoTheAccount"
            class="py-3 w-full  text-gray-700 text-center"
          />
        </div>
      </SignIn>
    </section>

    <section v-else>
      <SignUp>
        <div class="mt-3">
          <input
            type="button"
            v-model="authButton"
            @click="signIntoTheAccount"
            class="py-3 w-full  text-gray-700 text-center"
          />
        </div>
      </SignUp>
    </section>
  </div>

</template>

<script>
import SignIn from "../assets/components/SignIn.vue";
import SignUp from "../assets/components/SignUp.vue";

export default {
  name: "Auth",
  data() {
    return {
      accountOk: true,
      signUpPage: true,
      signInPage: true,
      authButton: "¿Ya tienes una cuenta?",
      authButton2: "¿No tienes una cuenta?",
    };
  },

  components: {
    SignIn,
    SignUp,
  },
  methods: {
    registerIntoTheAccount() {
      this.accountOk = !this.accountOk;
      this.authButton2;
    },
    signIntoTheAccount() {
      this.accountOk = !this.accountOk;
      this.authButton;
    },
  },
};
</script>

<style></style>
