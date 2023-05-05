<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/index";

const usuario = ref("");
const clave = ref("");
const error = ref(false);

function onSubmit() {
  const authStore = useAuthStore();
  authStore.login(usuario.value, clave.value).catch(() => (error.value = true));
}
</script>

<template>
    <div class="page-bg"><!-- No colocar contenido --></div>
  <div class="login">

    <form class="form" @submit.prevent="onSubmit">
      <h1 class="title">Iniciar Sesión</h1>
      <label class="form-label">Usuario:</label>
      <input
        v-model="usuario"
        type="text"
        class="form-input"
        placeholder="Usuario"
      />

      <label class="form-label">Contraseña:</label>
      <input
        v-model="clave"
        type="password"
        class="form-input"
        placeholder="Contraseña"
      />

      <p v-if="error" class="text-danger">Usuario y/o contraseña incorrectos</p>
      <input type="submit" class="form-submit" value="Ingresar" />
    </form>
  </div>
</template>

<style>



.login {
  padding: 2rem;
}

.title {
  text-align: center;
}

.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: rgb(0, 0, 0);
  margin-bottom: 0.5rem;
}

.form-input {
  border-radius: 10px;
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid rgb(177, 177, 177);
  color: rgb(0, 0, 0);
}

.form-submit {
  border-radius: 20px;
  background: #1a3db1;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
.page-bg {
    background: url("../assets/images/fondo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.4;
    /* -webkit-filter: blur(0.1rem);
-moz-filter: blur(0.1rem);
-o-filter: blur(0.1rem);
-ms-filter: blur(0.1rem); */
    filter: blur(0.7rem) grayscale(0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
