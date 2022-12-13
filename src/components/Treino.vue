<template>
  <!-- make a little box with some info -->

  <div class="flex rounded-md bg-main p-8 bg-gray-300 w-8/12">
    <div class="w-2/6">
      <img src="./../assets/bola.png" class="w-full" alt="" />
    </div>
    <div class="w-4/6 pl-8 lex flex-col gap-6">
      <h1>Nome: {{ Training.nome }}</h1>
      <h1 class="pt-2">Descrição: {{ Training.descricao }}</h1>
      <h1 class="pt-2">Modalidade: {{ Training.modalidade }}</h1>
      <h1 class="pt-2" v-if="Training.linkStrava">Link do strava:</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Training: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
    };
  },
};
</script>
