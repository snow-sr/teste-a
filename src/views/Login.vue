<script>
import axios from "axios";
import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8000/token/", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.$cookies.set("token", response.data.access);
          let decoded = jwt_decode(this.$cookies.get("token"));
          this.$cookies.set("userInfo", decoded.user_id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div class="h-screen flex">
    <div class="w-4/6">
      <div class="h-screen bg-image">
        <div class="w-full h-full bg-primary"></div>
      </div>
    </div>
    <div
      class="w-2/6 bg-orange-300 p-2 flex flex-col justify-center items-center"
    >
      <div class="w-9/12">
        <div class="flex justify-center">
          <img src="./../assets/bola.png" class="w-32" alt="" />
        </div>
        <div class="">
          <div>
            <!-- Email -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="Username"
              >
                Nome de usuário
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                v-model="username"
                type="text"
                placeholder="Nome de usuário"
              />
            </div>
            <!-- Password -->
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                v-model="password"
                placeholder="********"
              />
            </div>
            <!-- Sign button -->
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="
                  (e) => {
                    login();
                  }
                "
              >
                Login
              </button>
              <a
                class="inline-block align-baseline pt-3 font-bold text-sm text-blue-900 hover:text-blue-600"
                href="#"
              >
                Ainda não fez sua conta?
              </a>
            </div>
          </div>
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
