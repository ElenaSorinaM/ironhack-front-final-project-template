<template>
  <div >
    <section v-if="accountOk">
    <SignIn />
    <div @click="registerIntoTheAccount">
    </div>
    </section>
    <section v-else>
      <SignUp />
      <div @click="registerIntoTheAccount">
        
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
      accountOk: false,
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