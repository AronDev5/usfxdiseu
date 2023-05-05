<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import http from "@/plugins/axios";
import type { Test1 } from "@/types/test1";
import router from "@/router";

//endpoint de la pagina
const props = defineProps<{
  ENDPOINT_API: string;
}>();
const ENDPOINT = props.ENDPOINT_API;

onMounted(() => {
  getlist();
});

const preguntas = ref<Test1[]>([]);
const final = ref("");

async function getlist() {
  await http.get(`${ENDPOINT}/preguntas`).then((response) => {
    console.log("final", response.data.respuestas.finalTest1);
    final.value = response.data.respuestas.finalTest1;
    preguntas.value = response.data.test1;
    // alert("Hola, mundo!"+ response.data.test2);
    if (Number(response.data.respuestas.finalTest1) > 0) {
      router.push("/resultado");
      console.log("mayor a cero");
    }

    if (Number(response.data.respuestas.finalTest1) === 0) {
      console.log("igual a cero");
    }
  });
}

let si = 0;
let nosabe = 0;
let resultado = 0;

function cuee1() {
  for (let index = 1; index <= 36; index++) {
    const ggg = 'input[name="' + "cue" + index + '"]:checked';
    const seleccionado = document.querySelector<HTMLInputElement>(ggg)?.value;
    if (seleccionado == "a") {
      si = si + 1;
    }
    if (seleccionado == "b") {
      nosabe = nosabe + 1;
    }
  }
  si = si * 2;

  resultado = si + nosabe;
  console.log("si:", si);
  console.log("nosabe:", nosabe);
  console.log("resultado:", resultado);
  // saveResultado();
}

let id = 55;
// console.log("entro patch");
async function saveResultado() {
  await http.get(`${ENDPOINT}/${id}`, {});
  console.log("resultado:", resultado)
  router.push(`/resultado`);
}
</script>

<template>
  <div class="page-bg"><!-- No colocar contenido --></div>
  <div id="body-pd" class="container-fluid">
    <!-- cuestionario autoconocimiento 1-->
    <div class="row">
      <form @submit.prevent="cuee1()">
        <div class="col-xl-12 col-sm-12 col-12 mb-3 mt-4">
          <div class="card shadow-sm border-0">
            <div class="card-content">
              <!-- card body -->
              <div class="card-body">
                <h1 id="titulo2" class="text-center">
                  Test de Autoconocimiento
                </h1>
                <p id="intrucciones2" class="card-text">
                  Marque si o no a todos los adjetivos que describan tu
                  personalidad.Trate de definirse tal como es, no como le
                  gustaría ser.
                </p>
              </div>
              <!-- cuestionario -->
              <!-- pregunta 1 -->
              <div class="card-body" v-for="item in preguntas">
                <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                  <div id="juntadotodo2">
                    <h6 id="pregunta2">{{ item.id }}.- {{ item.pregunta }}</h6>
                    <div id="" style="text-indent: 10px">
                      <input
                        :id="'radio-si-' + item.id"
                        type="radio"
                        :name="'cue' + item.id"
                        :v-model="'cue' + item.id"
                        value="a"
                        class="radin"
                        required
                      /><label :for="'radio-si-' + item.id" id="opciones2">
                        Si</label
                      >
                    </div>
                    <div id="" style="text-indent: 10px">
                      <input
                        :id="'radio-nosabe-' + item.id"
                        type="radio"
                        :name="'cue' + item.id"
                        :v-model="'cue' + item.id"
                        value="b"
                        class="radin"
                        required
                      /><label :for="'radio-nosabe-' + item.id" id="opciones2"
                        >No sabe</label
                      >
                    </div>
                    <div id="" style="text-indent: 10px">
                      <input
                        :id="'radio-no-' + item.id"
                        type="radio"
                        :name="'cue' + item.id"
                        :v-model="'cue' + item.id"
                        value="c"
                        class="radin"
                        required
                      /><label :for="'radio-no-' + item.id" id="opciones2"
                        >No</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- <script>for (i=1 ; i<=10 ; i++){
                  document.write("<div class='mt-4'>");
                }  </script> -->

              <!-- ----------------- -->
            </div>
          </div>
        </div>
        <div class="centrado">
          <input
            id="resolver2"
            type="submit"
            class="lform-submit"
            value="Resolver"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/bootstrap.min.css";
/* @import "bootstrap-icons/font/bootstrap-icons.css"; */
/* @import "@/assets/css/styles.css"; */

.radin {
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: text-bottom;
}

.centrado {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 768px) {
  #body-pd {
    padding: 2% 4% 10% 4%;
  }

  #titulo2 {
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    color: rgb(43, 150, 87);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  #intrucciones2 {
    text-align: justify;
    padding: 2% 1% 0% 1%;
    font-size: 15px;
    color: rgb(107, 107, 107);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  #pregunta2 {
    font-size: 15px;
    color: rgb(65, 65, 65);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  #juntadotodo2 {
    background-color: rgb(236, 236, 236);
    /* top: 0;
	left: 0;
	right: 0;
	bottom: 0; */
    /* width: 100%; */
    /* display: block; */
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    padding: 25px;
    /* text-align: center; */
  }
  #juntado2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    /* height: 135%; */
    width: 95%;
    font-weight: bold;
    padding: 1% 0% 1% 1.5%;
    border-radius: 15px;
    margin: 1% 0% 1% 3%;
    border: rgb(70, 192, 121) solid 1px;
  }

  #juntado2:hover {
    width: 95%;
    background-color: rgb(43, 150, 87);
    border: rgb(70, 192, 121) solid 1px;
    color: white;
  }
  #circulo2 {
    background-color: #ce2c2c;
    width: 1.5em;
    height: 1.5em;
    border-radius: 100%;
    border: #ce2c2c solid 1.125em;
    margin-right: 0.375em;
    transition: 0.25s ease;
    /* box-shadow: inset 0 0 0 0.125em #00005c; */
  }
  #opciones2 {
    padding-top: 10px;
  }
  #resolver2 {
    font-size: 20px;
    background-color: rgb(43, 150, 87);
    border: rgb(43, 150, 87) solid 1px;
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    padding: 0.5% 4% 0.5% 4%;
    border-radius: 15px;
    align-items: center;
  }
}
@media screen and (min-width: 769px) {
  #body-pd {
    padding: 2% 12% 10% 12%;
  }

  #titulo2 {
    font-size: 32x;
    color: rgb(43, 150, 87);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  #intrucciones2 {
    text-align: justify;
    padding: 2% 10% 0% 10%;
    font-size: 15px;
    color: rgb(107, 107, 107);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  #pregunta2 {
    font-size: 15px;
    color: rgb(65, 65, 65);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  #juntadotodo2 {
    background-color: rgb(245, 245, 245);
    /* top: 0;
	left: 0;
	right: 0;
	bottom: 0; */
    /* width: 100%; */
    /* display: block; */
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    padding: 25px;
    /* text-align: center; */
  }
  #juntado2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    /* height: 135%; */
    width: 20%;
    font-weight: bold;
    padding: 1% 0% 1% 1.5%;
    border-radius: 15px;
    margin: 1% 0% 1% 3%;
    border: rgb(70, 192, 121) solid 1px;
  }

  #juntado2:hover {
    width: 20%;
    background-color: rgb(43, 150, 87);
    border: rgb(70, 192, 121) solid 1px;
    color: white;
  }
  #circulo2 {
    background-color: #ce2c2c;
    width: 1.5em;
    height: 1.5em;
    border-radius: 100%;
    border: #ce2c2c solid 1.125em;
    margin-right: 0.375em;
    transition: 0.25s ease;
    /* box-shadow: inset 0 0 0 0.125em #00005c; */
  }
  #opciones2 {
    padding-top: 10px;
  }
  #resolver2 {
    font-size: 22px;
    background-color: rgb(43, 150, 87);
    border: rgb(43, 150, 87) solid 1px;
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    padding: 0.5% 2% 0.5% 2%;
    border-radius: 15px;
    align-items: center;
  }
}
</style>
