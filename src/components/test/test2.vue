<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import http from "@/plugins/axios";
import router from "@/router";
import type { testVocacional } from "@/types/test-vocacional";

const props = defineProps<{
  ENDPOINT_API: string;
}>();
const ENDPOINT = props.ENDPOINT_API;

onMounted(() => {
  // respondio();
  getlist();
});

const idpregunta = ref(1);

const preguntas = ref<testVocacional[]>([]);
const radio = ref("");

const iduser = ref("1");

async function getlist() {
  await http.get(`${ENDPOINT}/preguntas`).then((response) => {
    preguntas.value = response.data.test2;
    idpregunta.value = response.data.respuestas.avance_testVoca + 1;
    if (response.data.respuestas.avance_testVoca === 98) {
      router.push("/res1");
    }
  });
  barra();
}
async function next() {
  const seleccionado = document.querySelector<HTMLInputElement>(
    'input[name="cue"]:checked'
  )?.value;
  console.log("radio:", seleccionado);
  await http.get(
    `${ENDPOINT}/resultado2?iduser=${iduser.value}&resultado2=${seleccionado} &numresp=${idpregunta.value}`
  );
  if (idpregunta.value === 98) {
    // router.push("/res1");
  } else {
    idpregunta.value = idpregunta.value + 1;
  }
  const radioButtons =
    document.querySelectorAll<HTMLInputElement>('input[name="cue"]');
  radioButtons.forEach((radioButton) => {
    radioButton.setAttribute("checked", "false");
  });

  radio.value = "";

  barra();
}

function barra() {
  const avance = (idpregunta.value / 100) * 100; // Valor de ejemplo
  const barraProgreso = document.querySelector(
    ".progress-bar"
  ) as HTMLDivElement;

  barraProgreso.style.width = `${avance}%`;
}
</script>
<template>
  <div class="container-fluid">
    <div class="row mt-5 mb-5 text-center"><h1>Test Vocacional</h1></div>
    <div class="row" v-for="item in preguntas">
      <div
        class="col d-flex align-items-center justify-content-center flex-column mt-5"
        v-if="item.id === idpregunta"
      >
        <div class="col-md-9 m-4">
          <!-- <h4 class="card-title">Custom animated radio button</h4> -->
          <h3 class="card-description">{{ item.id }}.- {{ item.pregunta }}</h3>
          <form @submit.prevent="next()">
            <div class="mt-4">
              <div class="">
                <input
                  type="radio"
                  class="option-input radio"
                  style="width: 2rem; height: 2rem; vertical-align: text-bottom"
                  name="cue"
                  v-model="radio"
                  value="1"
                  required
                />
                <label class="fs-4"> Si </label>
              </div>
              <div class="mt-2">
                <input
                  type="radio"
                  class="option-input radio"
                  style="width: 2rem; height: 2rem; vertical-align: text-bottom"
                  name="cue"
                  v-model="radio"
                  value="0"
                  required
                />
                <label class="fs-4"> No </label>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
              <button class="btn btn-primary" type="submit">Siguiente</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="position-fixed fixed-bottom w-100">
      <div class="progress w-100">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 0%"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/bootstrap.min.css";
/* @import "bootstrap-icons/font/bootstrap-icons.css"; */
@import "@/assets/css/styles.css";
</style>
