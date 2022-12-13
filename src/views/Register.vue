<script>
import { RouterLink } from 'vue-router';
import axios from "axios";
export default {
  components: {
    RouterLink
  },
  data() {
    return {
      email: "",
      nickname: "",
      password: "",
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:8000/Token/", {
          email: this.email,
          nickname: this.nickname,
          password: this.password,
        })
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
}
</script>

<template>
  <div class="h-screen flex">
    <div class="w-4/6">
      <div class="h-screen bg-image">
        <div class="w-full h-full bg-primary"></div>
      </div>
    </div>
    <div
      class="w-2/6 items-center bg-orange-300 p-2 flex flex-col justify-center items-center"
    >
      <div class="w-9/12">
        <div class="flex justify-center">
          <img src="./../assets/bola.png" class="w-32" alt="" />
        </div>
        <div class="">
          <form>
            <!-- Email -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                v-model="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <!-- Nickname -->
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Nickname
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nickname"
                v-model="username"
                type="text"
                placeholder="Nickname"
              />
            </div>
            <!-- Password -->
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Senha
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                v-model="password"
                type="password"
                placeholder="********"
              />            </div>
            <!-- Sign button -->
            <div class="flex flex-col items-center justify-between">
              <button
                class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="register"
              >
                Criar Conta
              </button>
              <a
                class="inline-block align-baseline pt-3 font-bold text-sm text-blue-900 hover:text-blue-600"
                href="#"
              >
                Já tem uma conta?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-image {
  background-image: url("../assets/background.png");
  color: #fff;
  background-size: cover;
  background-position: center;
}
.bg-primary {
  background-color: rgba(20, 65, 111, 0.723);
}
</style>
