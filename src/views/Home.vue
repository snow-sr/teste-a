<script>
import Navbar from "../components/Navbar.vue";
import CardV from "../components/CardVoley.vue"
import CardB from "../components/CardBasket.vue"
import CardF from "../components/CardFootbal.vue"

export default {
  components: {
    Navbar,
    CardV,
    CardB,
    CardF
  },
  data() {
    return {
      menu: true,
    };
  },
};
</script>

<template>
  <main class="min-h-screen text-gray-100 bg-gray-700">
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
        <div class="text-xl" v-if="menu">
          <h2 class="text-center text-red-200 font-bold">MODALIDADES</h2>
          <div class="pt-2 flex ">
            <CardV />
            <CardB />
            <CardF />
          </div>
        </div>
        <div>
          <h2 class="text-center font-bold">NOTÍCIAS:</h2>
          <div class="pt-8">
            Você sabia que no último mês você treinou mais de 30 vezes?
            <br />Isso quer dizer que em média você treinou todos os dias do mês, e isso é muito importante para a criação de
            resistência, além é claro de te deixar melhor no esporte!
            <br />Continue assim!
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.bg-image-small {
  background-image: url("../assets/background.png");
  color: #fff;
  background-size: cover;
  background-position: center;
}
</style>
