<template>
  <div >
    <section v-if="accountOk">
      <SignIn />
    </section>
    <section v-else>
      <SignUp :signUpPage="signupPage"/>  
      <!-- <SignUp :signUpPage="signupPage" />   -->
      <!-- <button class="btn" :style="{backgroundColor:bgColor}">{{name}}</button> -->
    </section>

    
    
    <!-- no consigo moverlo de aquì -->
     <!-- <button v-if="signUpPage = !signUpPage " @click="registerIntoTheAccount">¿Ya tienes una cuenta?</button>
      <button v-else-if="signInPage = !signInPage" @click="signIntoTheAccount">¿Ya tienes una cuenta?</button> --> 
  </div>
  
</template>

<script>
import SignIn from '../assets/components/SignIn.vue';
import SignUp from '../assets/components/SignUp.vue';

export default {
  name:"Auth",
  data(){
    return{
      accountOk: false,
      signUpPage: true,
      signInPage: true,
    };
  },
    //props: {
    //    name: String,
    //    bgColor: String
    //},
    components: { 
      SignIn, 
      SignUp,
      },
    methods: {
      registerIntoTheAccount() {
        this.accountOk = !this.accountOk;
      },
      signIntoTheAccount() {
        this.accountOk = !this.accountOk;
        }
      },
};
</script>

<style>

</style>