<template>
  <div >
    <section v-if="accountOk">
    <SignIn />
    <div>
      <button @click="registerIntoTheAccount">
      Accede a tu cuenta</button>
    </div>
    </section>
    <section v-else>
      <SignUp />
      <div>
        <button @click="registerIntoTheAccountt">
        No tengo una cuenta</button>
      </div>
    </section>
     
  </div>
  
</template>

<script>
import SignIn from '../assets/components/SignIn.vue';
import SignUp from '../assets/components/SignUp.vue';

export default {
  name:"Auth",
  data(){
    return{
      accountOk: true,
    };
  },
    components: { 
      SignIn, 
      SignUp 
      },
      methods: {
        registerIntoTheAccount() {
          this.accountOk = !this.accountOk;
        },
      },
};
</script>

<style>

</style>