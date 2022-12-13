import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Register from "../views/Register.vue";
import Training from "../views/Training.vue";
import Logout from "../views/Logout.vue"
import SpecificTraining from "../views/SpecificTraining.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/Profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/Training",
      name: "training",
      component: Training,
    },
    {
      path: "/SpecificTraining/:id",
      name: "specificTraining",
      component: SpecificTraining,
    },
    {
      path: "/logout",
      name: "Logout",
      component: Logout
    }
  ],
});

export default router;
