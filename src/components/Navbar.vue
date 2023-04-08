<template>
  <nav v-if="user">
    <div>
        <p>Hi {{asd?.displayName}}</p>
        <p class="email">Currently logged in as {{asd?.email}}</p>
    </div>
    <button class="pointer" @click="handleClick">Logout</button>
    <button class="pointer asd" @click="handleUsers">Users Profile</button>
  </nav>
</template>

<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';
import { ref } from 'vue';
import {useRouter} from "vue-router"
export default {
setup() {
    const router = useRouter()
    const {logout,error}= useLogout()
const {user}=getUser()
const asd=ref(user?._rawValue)
    const handleClick= async()=>{
await logout()
// if(!error.value){
//     console.log("user logged out")
// }
    }
    const handleUsers= ()=>{

 router.push({name:"users"})
// if(!error.value){
//     console.log("user logged out")
// }
    }
    return {handleClick,user,asd,handleUsers}
}
}
</script>

<style>
nav{
    padding: 20px;
    border-bottom:1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p{
    margin: 2px auto;
    font-size: 16px;
    color: #444;
    text-align: left;
}
nav p.email{
    font-size: 14px;
    color: #888;
}
.pointer{
    cursor: pointer;
}
.asd{background:#4576e2;}
</style>