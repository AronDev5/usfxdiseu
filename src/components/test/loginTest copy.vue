<script setup lang="ts">
import http from "@/plugins/axios";
import { onMounted, ref, watch } from "vue";
import router from "@/router";

//endpoint de la pagina
const props = defineProps<{
  ENDPOINT_API: string;
}>();
const ENDPOINT = props.ENDPOINT_API;

onMounted(() => {
  // carnet.value = "";
  //  fecha.value = "";
  id.value = "";
  nombre.value = "";
  respondio.value = "";
  console.log(ENDPOINT);
});

const carnet = ref("");
const fecha = ref("");

const id = ref("");
const nombre = ref("");
const respondio = ref("");

async function LoginT() {
  // console.log(fecha.value);
  await http
    .get(`${ENDPOINT}?carnet=${carnet.value}&fecha=${fecha.value}}`)
    .then((response) => {
      nombre.value = response.data.nombre;
      id.value = response.data.id;
      respondio.value = response.data.respondido;
    });

  if (id.value == undefined) {
    alert("Error al ingresar vuelva a intentarlo");
    console.log("nulllo");
  }
  if (id.value != undefined) {
    localStorage.setItem("idUser", "id.value");
    localStorage.setItem("respondido", "respondio.value");
  }

  console.log(
    "id:",
    id.value,
    " nombre:",
    nombre.value,
    "responmdio:",
    respondio.value
  );
  router.push(`/bienvenida`);
}
// async function LoginT() {
//   await http
//     .get(
//       `${"http://127.0.0.1:3000/api/usertest"}?limite=${carnet}&pagina=${fecha}}`
//     )
//     .then((response) => {
//       nombre.value = response.data.nombre;
//       id.value = response.data.id;
//       respondio.value = response.data.respondido;
//     });
//   console.log("id:",id.value, " nombre:", nombre.value, "responmdio:", respondio.value);
// }
</script>
<template>
  <div class="login">
    <h1 class="title">Iniciar Sesión</h1>
    <form class="form" @submit.prevent="LoginT()">
      <h4>Introduce tus datos</h4>
      <label class="form-label">Carnet de idedentidad:</label>
      <input
        type="number"
        class="form-input"
        placeholder="Usuario"
        v-model="carnet"
        required
      />

      <label class="form-label">fecha de nacimiento:</label>
      <input type="date" class="form-input" v-model="fecha" required />

      <!-- <p v-if="error" class="text-danger">Usuario y/o contraseña incorrectos</p> -->
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
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 300px;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: rgb(0, 0, 0);
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid rgb(160, 160, 160);
  border-radius: 10px;
  color: rgb(0, 0, 0);
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
</style>
