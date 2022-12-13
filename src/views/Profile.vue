<script>
import Navbar from "../components/Navbar.vue";
import Profile from "../components/ProfileInfo.vue";
import Graph from "../components/Graph.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
    Profile,
    Graph,
  },
  data() {
    return {
      Profile: {},
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:8000/atleta/" + this.$cookies.get("userInfo") + "/"
      )
      .then((response) => {
        this.Profile = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<template>
  <div class="h-screen bg-gray-700">
    <div class="bg-primary min-h-full">
      <div class="bg-nav">
        <Navbar />
      </div>
      <div class="flex flex-col items-center justify-center mt-32">
        <div class="w-screen flex flex-col items-center">
          <profile :Athlete="Profile" />
          <div class="mt-5">
            <h1 class="text-center text-white font-bold">Seus últimos 3 meses na plataforma:</h1>
            <graph />
          </div>
          </div>
      </div>
    </div>
  </div>
</template>
