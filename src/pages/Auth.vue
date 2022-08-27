<template>
  <div >
    <section v-if="accountOk">
      <SignIn />
    </section>
    <section v-else>
      <SignUp />
    </section>
    <button @click="registerIntoTheAccount">Cambio</button>
     
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