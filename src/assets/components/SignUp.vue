<template>
  <body class="bg-white">
    
    <div
     v-if="!confirmation"
      class="flex min-h-screen bg-white">

        <div class="w-1/2 bg-cover md:block hidden" style="background-image:  url(https://cdn.pixabay.com/photo/2017/03/31/15/34/cactus-2191647_960_720.jpg)"></div>
       


        <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">

            <div class="text-left p-0 font-sans">
                
                <h1 class=" text-gray-800 text-2xl font-medium">Crea tu cuenta y cuida tus plantas con nosotrxs</h1>
                <h3 class="p-1 text-gray-700">Es gratuito! 😊</h3>
            </div>
            <form action="#" class="p-0">
                <div class="mt-5">
                    <input 
                    v-model="email"
                    type="email"
                    id="email"
                    placeholder="Correo electrónico"
                     class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent ">
                </div>
                <div class="mt-5">
                    <input 
                    v-model="confirmEmail"
                    type="email"
                    id="email"
                    placeholder="Confirma tu dirección de correo electrónico"
                    class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent ">
                </div>
                <div class="mt-5">
                    <input 
                    v-model="password"
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent ">
                </div>
                <div class="mt-5">
                    <input 
                    v-model="confirmPassword"
                    type="password" 
                    id="confirmPassword"
                    placeholder="Confirma tu contraseña"
                    class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  ">
                </div>

                <div class="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
                    <input type="checkbox" class="inline-block border-0  ">
                    <span display="inline" class="">Antes de enviar el Formulario de contacto, 
                        lea y confirme que está de acuerdo con la
                    <a class="" href="#" target="_blank" data-test="Link">
                        <span class="underline">Política de privacidad</span> </a>
                    </span>
                </div>

                <div class="mt-10">
                    <input type="submit" value="Regístrate con correo electronico" class="py-3 bg-emerald-500 text-white w-full rounded hover:bg-emerald-700">
                </div>
            </form>
            <a class="" href="./SignIn.vue" data-test="Link"><span class="block  p-5 text-center text-gray-800  text-xs ">¿Ya tienes una cuenta?</span></a>
        </div>


    </div>
</body>
</template>

<script>
export default {

}
</script>

<style>

</style>