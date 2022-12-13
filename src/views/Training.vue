<template>
  <main class="min-h-screen bg-gray-700">
    <div class="min-h-screen bg-primary">
      <div class="px-10 w-full bg-nav">
        <Navbar />
      </div>
      <!-- Imagem header -->
      <div class="bg-image-small w-full h-40">
        <div
          class="bg-primary w-full h-full border-b-4 border-orange-400"
        ></div>
      </div>
      <div class="flex flex-col gap-8 w-full p-10 container mx-auto">
        <div v-for="Tr in Treinos" :key="Tr.id">
          <Treino :Training="Tr" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Treino from "../components/Treino.vue";
import Graph from "../components/Graph.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
    Treino,
    Graph,
  },
  data() {
    return {
      menu: false,
      Treinos: [],
    };
  },
  mounted() {
    axios.get("http://localhost:8000/treino/").then((response) => {
      //filter response data where Atleta is equal to cookie userInfo
      console.log(response.data);
      this.Treinos = response.data.filter(
        (treino) => treino.atleta == this.$cookies.get("userInfo")
      );
      console.log(this.Treinos);
    });
  },
};
</script>
