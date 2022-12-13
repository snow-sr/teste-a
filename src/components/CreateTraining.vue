<template>
    <!-- form with nome, descricao e modalidade(select) -->
    <div class="flex flex-col items-center justify-center">
        <div class="p-5 flex flex-col items-center justify-center w-96 bg-gray-300 rounded-md">
            <h1 class="mb-3 text-2xl font-bold">Criar treino</h1>
            <form class="p-2 flex flex-col items-center justify-center w-full h-full gap-4"
                @submit.prevent="createTraining">
                <input class="h-10 rounded-md" type="text" placeholder="Nome" v-model="nome">
                <input class="h-10 rounded-md" type="text" placeholder="Descrição" v-model="descricao">
                <select class="w-1/2 h-10 rounded-md" v-model="modalidade">
                    <option v-for="modalidade in modalidades" :value="modalidade.id">{{ modalidade.descricao }}</option>
                </select>
                <button class="w-1/2 h-10 rounded-md bg-blue-500 text-white" type="submit">Criar</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            nome: "",
            descricao: "",
            modalidade: "",
            modalidades: [],
        }
    },
    async mounted() {
        await axios.get("http://localhost:8000/modalidade/").then((response) => {
            this.modalidades = response.data;
        });
    },
    methods: {
        createTraining() {
            axios.post("http://localhost:8000/treino/", {
                nome: this.nome,
                descricao: this.descricao,
                modalidade: this.modalidade,
                atleta: this.$cookies.get("userInfo"),
            }).then((response) => {
                console.log(response.data);
                window.location.reload();
            });
        }
    }
}
</script>