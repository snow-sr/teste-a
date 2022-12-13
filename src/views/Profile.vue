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
      <div class="flex flex-col justify-center mt-32">
        <profile :Athlete="Profile" />
        <graph />
      </div>
    </div>
  </div>
</template>
