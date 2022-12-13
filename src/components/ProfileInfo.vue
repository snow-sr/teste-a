<template>
  <!-- A rounded div with an image and informations -->
  <div class="flex rounded-md bg-main p-8 bg-gray-300 w-5/12">
    <div class="w-2/6">
      <img
        src="./../assets/bola.png"
        class="w-full"
        alt=""
        v-if="!Athlete.image"
      />
      <img :src="Athlete.image" class="w-full" alt="" />
    </div>
    <div class="w-4/6 pl-8 flex flex-col gap-6">
      <!-- Informations -->
      <h1>Nome: {{ Athlete.nome }}</h1>
      <h1>Esporte: {{ Athlete.esporte }}</h1>
      <h1>Posição: {{ Athlete.posicao }}</h1>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Editar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    Athlete: {
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
