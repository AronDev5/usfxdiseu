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
  localStorage.clear();
  carnet.value = "";
  fecha.value = "";
  iduser.value = "";
  nombre.value = "";
  respondio.value = "";
  console.log(ENDPOINT);
});

const carnet = ref("");
const fecha = ref("");

const iduser = ref("");
const nombre = ref("");
const respondio = ref("");
const error = ref("");
async function LoginT() {
  // console.log(fecha.value);
  // router.push(`/test1`);

  await http
    .get(`${ENDPOINT}?carnet=${carnet.value}&fecha=${fecha.value}`)
    .then((response) => {
      nombre.value = response.data.nombre;
      iduser.value = response.data.id;
      respondio.value = response.data.respondido;
      error.value = response.data.error;
    });

  if (error.value) {
    alert(error.value);
  } else {
    localStorage.setItem("iduser", iduser.value);
    localStorage.setItem("nombre", nombre.value);
    router.push(`/bienvenida`);
  }
}
</script>
<!-- <template>
  <div class="l_login">
    <h1 class="ltitle">Iniciar Sesión</h1>
    <form class="lform" @submit.prevent="LoginT()">
      <h4>Introduce tus datos</h4>
      <label class="lform-label">Carnet de idedentidad:</label>
      <input
        type="number"
        class="lform-input"
        placeholder="000000"
        v-model="carnet"
        required
      />
      <label class="lform-label">fecha de nacimiento:</label>
      <input type="date" class="lform-input" v-model="fecha" required />

      <input type="submit" class="lform-submit" value="Ingresar" />
    </form>
  </div>
</template> -->

<template>
  <section class="ftco-section">
    <div class="page-bg"><!-- No colocar contenido --></div>
    <div class="container" style="padding: 7%">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
          <h2 class="heading-section" style="font-size: 35px">
            <strong>Acceder</strong>
          </h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="login-wrap p-0">
            <h3 class="mb-4 text-center">Verificar</h3>
            <form action="#" class="signin-form" @submit.prevent="LoginT()">
              <div class="form-group">
                <label>Carnet de idedentidad:</label>
                <input
                  type="number"
                  placeholder="000000"
                  v-model="carnet"
                  class="form-control mb-2 rounded-5 p-3"
                  required
                />
              </div>
              <div class="form-group">
                <label class="lform-label center">fecha de nacimiento:</label>
                <input
                  id="password-field"
                  type="date"
                  class="form-control mb-2 rounded-5 p-3"
                  placeholder="Fecha"
                  v-model="fecha"
                  required
                />
                <span
                  toggle="#password-field"
                  class="fa fa-fw fa-eye field-icon toggle-password"
                ></span>
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="form-control btn rounded-5 btn-success text-white p-3 mb-4"
                >
                  Iniciar
                </button>
              </div>
            </form>
            <!-- <p class="w-100 text-center">— Consultas —</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#new {
  background-color: #212529;
  color: white;
}

input[placeholder="new"]::placeholder {
  color: #ffffff; /* reemplaza #999 con el color deseado */
}

.lcenter {
  text-align: center;
}

.placeholder {
  color: #b96d6d;
  opacity: 1; /* Firefox */
}
.page-bg {
  background: url("../../assets/images/fondo.jpg");
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
@media screen and (max-width: 768px) {
}

@media screen and (min-width: 769px) {
}
</style>
