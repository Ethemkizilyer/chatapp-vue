<template>
  <form @submit.prevent="handleSubmit">

    <input type="email" required placeholder="E-Mail" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
        <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "@/composables/useLogin"
import { useRouter } from 'vue-router';

export default {
  setup(props,context) {
    const router = useRouter();
const {error,login}=useLogin()
    const email = ref("");
    const password = ref("");
    const handleSubmit =async () => {
     const result =await  login (email.value,password.value)
     if(error.value == ""){
     context.emit("login")
     router.push('/chatroom')
     }
    //  if(result){
    //   router.push('/chatroom')

    //  }
    };

    return { email, password, handleSubmit,error };
  },
};
</script>

<style></style>
