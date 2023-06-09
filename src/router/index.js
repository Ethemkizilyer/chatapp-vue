import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome.vue";
import { projectAuth } from '@/firebase/config';

const requireAuth=(to,from,next)=>{
  let user=projectAuth.currentUser
  // console.log("current user in auth guard:",user)
if(!user){
  console.log("welcome")
  next({name:"welcome"})
}else{
  next()
  console.log("welcome");
}
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  // console.log("current user in auth guard:",user)
  if (user) {
     console.log("chatroom");
    next({ name: "chatroom" });
  } else {
    next();
  }
};


const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
    beforeEnter:requireNoAuth
  },
  {
    path: "/chatroom",
    name: "chatroom",

    component: () => import("../views/Chatroom.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/users",
    name: "users",

    component: () => import("../views/Profile.vue"),
    // beforeEnter: requireAuth
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
