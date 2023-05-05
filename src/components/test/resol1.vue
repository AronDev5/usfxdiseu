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

const preguntas = ref();
// const final = ref("");
var final = 59;
async function getlist() {
  await http.get(`${ENDPOINT}/preguntas`).then((response) => {
    console.log("final", response.data.respuestas.finalTest1);
    // final.value = response.data.respuestas.finalTest1;
    preguntas.value = response.data.respuestas.finalTest1;
    // alert("Hola, mundo!"+ response.data.test2);
  });
  console.log("final", preguntas.value);
}

async function saveResultado() {
  if (final <= 60) {
  }
  console.log("dddd");
}
</script>
<template>
  <div class="page-bg"><!-- No colocar contenido --></div>
  <div id="sesion2" class="container-fluid mx-auto p-10">
    <div class="col-auto text-center">
      <div class="container">
        <div class="title col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <h4 class="" id="titulo1">
              Estos son tus resultados
            </h4>
          </div>
          <div class="row">
            <div class="col-lg-6 box-flex">
              <img
                alt="image"
                src="../../assets/images/bienvenidaguia.png"
                class="imagencentral"
              />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div placeholder="" class="placeholder amp-hidden">
                <div class="mobirise-spinner">
                  <em></em>
                </div>
              </div>
              <div class="text-wrap">
                <ul id="parrafo1" class="text-left" v-if="final <= 20">
                  <li>
                    Sería maravilloso si pudieras lograr obtener tu diploma de
                    bachiller con dedicación y esfuerzo.
                  </li>
                  <li>
                    Después de obtener tu bachillerato, considera la posibilidad
                    de estudiar un programa técnico o una carrera corta. Si te
                    esfuerzas, puedes lograrlo.
                  </li>
                  <li>
                    Quizás no sea lo más aconsejable que te plantees estudios
                    universitarios y de larga duración en este momento.
                  </li>
                </ul>

                <ul
                  id="parrafo1"
                  class="text-left"
                  v-if="final >= 21 && final <= 50"
                >
                  <li>
                    Te recomendamos que consideres estudiar una carrera de grado
                    medio o superior, o incluso una carrera corta en la que
                    podrás tener mucho éxito.
                  </li>
                  <li>
                    Se nota que tienes interés por el estudio, pero quizás no
                    estás totalmente comprometido con la idea de realizar una
                    carrera larga.
                  </li>
                  <li>
                    Sería muy valioso que puedas obtener tu título de bachiller.
                  </li>
                </ul>

                <ul id="parrafo1" v-if="final > 50">
                  <li>Es bueno saber que tienes interés en el estudio.</li>
                  <li>
                    Recuerda que la paciencia y la metodología son clave para
                    alcanzar tus objetivos académicos.
                  </li>
                  <li>
                    Si te lo propones, puedes realizar estudios de larga
                    duración y mucha exigencia.
                  </li>
                </ul>

                <br />

                <div
                  class="link-wrap"
                  on="tap:my-lightbox"
                  role="button"
                  tabindex="0"
                ></div>
              </div>
            </div>
            <div id="titulodebajo" class="col-12">
              <h5>
                Los resultados anteriores no deben desanimarte, sino más bien,
                pueden servir como una oportunidad para desafiarte a ti mismo/a
                y aumentar tu autoestima. Toma la decisión de enfocarte en tus
                intereses y recuerda que eres quien crea tu propio futuro. Todo
                es posible si te lo propones.
              </h5>
              <button id="boton1">
                <a href="/" style="color: aliceblue">Inicio</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />

      <footer>
        <div style="display: flex-">
          <div>
            <img class="imagenfooter1" src="../../assets/images/escudo.png" />
            <img
              class="imagenfooter2"
              src="../../assets/images/diseu.png"
              height="150px"
            />
          </div>
        </div>
        <br />
        <p class="text-center text-body-secondary">© 2023 U.S.F.X, Inc</p>
      </footer>
    </div>
  </div>
</template>
<style>
/* celular */
@media screen and (max-width: 768px) {
  .imagenfooter1 {
    width: 10%;
    height: 10%;
  }
  .imagenfooter2 {
    width: 30%;
    height: 30%;
  }
  .imagencentral {
    /* width: 70%; */
    height: 300px;
    padding: 0;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 0.75rem rgba(54, 54, 54, 0.459));
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
  a {
    text-decoration: none;
    background-color: transparent;
    color: aliceblue;
  }
  .hidden {
    display: none;
  }
  #sesion2 {
    position: absolute;
    /* background-color: rgba(255, 255, 255, 0.404); */
    /* background-image: url(./assets/anim.jpg); */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.9;
    /* filter: blur(10px); */
  }
  .imagen1 {
    position: absolute;
    top: 0;
    left: 0;
    /* background: rgba(255, 255, 255, 0.925); */
    /* background-image: url(./assets/escudo.png); */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.9;
    /* animation: animaciolog 17s ease-out infinite; */
    /* filter: blur(10px); */
  }
  @keyframes animaciolog {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(1000px);
    }
    0% {
      opacity: 1;
      transform: translateX(-100px);
    }
  }
  #titulo1 {
    margin-top: 8%;
    color: #1f1f1f;
    padding-top: 5%;
    font-size: 30px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 800;
    filter: drop-shadow(0 0 0.75rem rgba(1, 2, 1, 0.7));
    animation: tituloentrada 5s ease-out;
  }
  #parrafo1 {
    padding: 2% 2% 2% 2%;
    font-size: 15px;
    font-weight: 300;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana;
    text-align: justify;
    animation: parrafo 5s ease-out;
  }
  #boton1 {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px 30px 10px 30px;
    color: white;
    font-size: 20px;
    background: #09aa5a;
    border-radius: 20px;
    font-weight: bold;
    border: 0;
  }
  #boton1:hover {
    background: #19d376;
    color: white;
    border-radius: 20px;
    border: 0;
  }
  @keyframes tituloentrada {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    20% {
      opacity: 0.1;
      transform: translateY(-80px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes parrafo {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    20% {
      opacity: 0.2;
      transform: translateX(-80px);
    }
    25% {
      opacity: 0.2;
      transform: translateX(-70px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
}

/* pc */
@media screen and (min-width: 769px) {
  .imagenfooter1 {
    width: 4%;
    height: 4%;
  }
  .imagenfooter2 {
    width: 10%;
    height: 10%;
  }
  .imagencentral {
    /* width: 70%; */
    height: 400px;
    padding: 0;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 0.75rem rgba(54, 54, 54, 0.459));
  }
  .page-bg {
    background: url("../../assets/images/anim.jpg");
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
  a {
    text-decoration: none;
    background-color: transparent;
    /* color: aliceblue; */
  }
  .hidden {
    display: none;
  }
  #sesion2 {
    position: absolute;
    /* background-color: rgba(255, 255, 255, 0.404); */
    /* background-image: url(./assets/anim.jpg); */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.9;
    /* filter: blur(10px); */
  }
  .imagen1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 17%/4;
    height: 40%/4;
    /* background: rgba(255, 255, 255, 0.925); */
    /* background-image: url(./assets/escudo.png); */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.9;
    /* animation: animaciolog 17s ease-out infinite; */
    /* filter: blur(10px); */
  }
  @keyframes animaciolog {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(1000px);
    }
    0% {
      opacity: 1;
      transform: translateX(-100px);
    }
  }
  #titulo1 {
    color: #505050;
    padding-top: 5%;
    font-size: 50px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    animation: tituloentrada 2s ease-out;
  }

  #titulodebajo {
    animation: tituloabajo 2s ease-out;
  }
  #parrafo1 {
    padding: 10% 10% 10% 10%;
    font-size: 20px;
    font-weight: 400;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana;
    text-align: left;
    animation: parrafo 2s ease-out;
  }
  #boton1 {
    padding: 10px 30px 10px 30px;
    color: white;
    font-size: 20px;
    background: #0d6efd;
    border-radius: 20px;
    font-weight: bold;
    border: 0;
  }
  #boton1:hover {
    background: #19d376;
    color: white;
    border-radius: 20px;
    border: 0;
  }
  @keyframes tituloabajo {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes tituloentrada {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes parrafo {
    0% {
      opacity: 0;
      transform: translateX(40px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
}
.admtext {
  color: #505050;
  font-size: 20px;
  font-weight: 400;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana;
}
</style>
