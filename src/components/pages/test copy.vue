<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import http from "@/plugins/axios";
import { Modal } from "bootstrap";
import type { Estudiante } from "@/types/estudiante";
import Chart from "chart.js/auto";

const chartRef = ref<HTMLCanvasElement | null>(null);
const chartRef2 = ref<HTMLCanvasElement | null>(null);
const chartRef3 = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const myChart = new Chart(chartRef.value!, {
    type: "pie",
    data: {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [
        {
          data: [12, 19, 3, 34, 10, 33, 45, 20, 60, 45, 45, 16],
          borderWidth: 3,
        },
      ],
    },

    options: {
      plugins: {
        title: {
          display: true,
          text: "titulo",
          color: "#0D6EFD",
          font: {
            size: 16,
          },
        },
        legend: {
          display: false,
        },
      },
    },
  });

  const myChart2 = new Chart(chartRef2.value!, {
    // type: "pie",
    type: "bar",

    data: {
      labels: [
        "REALISTA",
        "INVESTIGADOR",
        "SOCIAL",
        "CONVENCIONAL",
        "EMPRENDEDOR",
        "ARTÍSTICO",
      ],
      datasets: [
        {
          data: [
            cue3_REALISTA,
            cue3_INVESTIGADOR,
            cue3_SOCIAL,
            cue3_CONVENCIONAL,
            cue3_EMPRENDEDOR,
            cue3_ARTÍSTICO,
          ],
          borderWidth: 3,
        },
      ],
    },

    options: {
      plugins: {
        title: {
          display: true,
          text: "titulo",
          color: "#0D6EFD",
          font: {
            size: 16,
          },
        },
        legend: {
          display: false,
        },
      },
    },
  });

  const myChart3 = new Chart(chartRef3.value!, {
    // type: "pie",
    type: "polarArea",

    data: {
      labels: [
        "REALISTA",
        "INVESTIGADOR",
        "SOCIAL",
        "CONVENCIONAL",
        "EMPRENDEDOR",
        "ARTÍSTICO",
      ],
      datasets: [
        {
          data: [12, 19, 3, 34, 10, 33, 45, 20, 60, 45, 45, 16],
          borderWidth: 3,
        },
      ],
    },

    options: {
      plugins: {
        title: {
          display: true,
          text: "titulo",
          color: "#0D6EFD",
          font: {
            size: 16,
          },
        },
        legend: {
          display: false,
        },
      },
    },
  });
});

const cue1_p1 = ref("");
const cue1_p2 = ref("");
const cue1_p3 = ref("");
const cue1_p4 = ref("");
const cue1_p5 = ref("");
const cue1_p6 = ref("");
const cue1_p7 = ref("");
const cue1_p8 = ref("");
const cue1_p9 = ref("");
const cue1_p10 = ref("");

const cue1_p11 = ref("");
const cue1_p12 = ref("");
const cue1_p13 = ref("");
const cue1_p14 = ref("");
const cue1_p15 = ref("");
const cue1_p16 = ref("");
const cue1_p17 = ref("");
const cue1_p18 = ref("");
const cue1_p19 = ref("");
const cue1_p20 = ref("");

const cue1_p21 = ref("");
const cue1_p22 = ref("");
const cue1_p23 = ref("");
const cue1_p24 = ref("");
const cue1_p25 = ref("");
const cue1_p26 = ref("");
const cue1_p27 = ref("");
const cue1_p28 = ref("");
const cue1_p29 = ref("");
const cue1_p30 = ref("");

const cue1_p31 = ref("");
const cue1_p32 = ref("");
const cue1_p33 = ref("");
const cue1_p34 = ref("");
const cue1_p35 = ref("");
const cue1_p36 = ref("");
const cue1_p37 = ref("");
const cue1_p38 = ref("");
const cue1_p39 = ref("");
const cue1_p40 = ref("");
const cue1_p41 = ref("");
const cue1_p42 = ref("");
const cue1_p43 = ref("");
const cue1_p44 = ref("");
const cue1_p45 = ref("");

var cue1_REALISTA = 0;
var cue1_INVESTIGADOR = 0;
var cue1_SOCIAL = 0;
var cue1_CONVENCIONAL = 0;
var cue1_EMPRENDEDOR = 0;
var cue1_ARTÍSTICO = 0;

function cue1() {
  cue1_REALISTA = (
    cue1_p3.value +
    cue1_p11.value +
    cue1_p18.value +
    cue1_p21.value +
    cue1_p24.value +
    cue1_p27.value +
    cue1_p35.value +
    cue1_p44.value
  )
    .split("")
    .filter((char) => char === "1").length;
  cue1_INVESTIGADOR = (
    cue1_p8.value +
    cue1_p19.value +
    cue1_p29.value +
    cue1_p31.value +
    cue1_p33.value +
    cue1_p36.value +
    cue1_p37.value +
    cue1_p43.value
  )
    .split("")
    .filter((char) => char === "1").length;
  cue1_SOCIAL = (
    cue1_p4.value +
    cue1_p14.value +
    cue1_p15.value +
    cue1_p16.value +
    cue1_p17.value +
    cue1_p22.value
  )
    .split("")
    .filter((char) => char === "1").length;
  cue1_CONVENCIONAL = (
    cue1_p5.value +
    cue1_p6.value +
    cue1_p7.value +
    cue1_p9.value +
    cue1_p10.value +
    cue1_p26.value +
    cue1_p28.value +
    cue1_p42.value
  )
    .split("")
    .filter((char) => char === "1").length;
  cue1_EMPRENDEDOR = (
    cue1_p2.value +
    cue1_p12.value +
    cue1_p23.value +
    cue1_p32.value +
    cue1_p38.value +
    cue1_p39.value +
    cue1_p40.value +
    cue1_p41.value
  )
    .split("")
    .filter((char) => char === "1").length;
  cue1_ARTÍSTICO = (
    cue1_p1.value +
    cue1_p13.value +
    cue1_p20.value +
    cue1_p25.value +
    cue1_p30.value +
    cue1_p34.value +
    cue1_p45.value
  )
    .split("")
    .filter((char) => char === "1").length;

  // console.log("entro");
  console.log(
    "\ncue1_REALISTA:" + cue1_REALISTA,
    "\ncue1_INVESTIGADOR:" + cue1_INVESTIGADOR,
    "\ncue1_SOCIAL:" + cue1_SOCIAL,
    "\ncue1_CONVENCIONAL:" + cue1_CONVENCIONAL,
    "\ncue1_EMPRENDEDOR:" + cue1_EMPRENDEDOR,
    "\ncue1_ARTÍSTICO:" + cue1_ARTÍSTICO
  );
}

const cue2_p1 = ref("");
const cue2_p2 = ref("");
const cue2_p3 = ref("");
const cue2_p4 = ref("");
const cue2_p5 = ref("");
const cue2_p6 = ref("");
const cue2_p7 = ref("");
const cue2_p8 = ref("");
const cue2_p9 = ref("");
const cue2_p10 = ref("");
const cue2_p11 = ref("");
const cue2_p12 = ref("");
const cue2_p13 = ref("");
const cue2_p14 = ref("");
const cue2_p15 = ref("");
const cue2_p16 = ref("");
const cue2_p17 = ref("");
const cue2_p18 = ref("");

var cue2_REALISTA = 0;
var cue2_INVESTIGADOR = 0;
var cue2_SOCIAL = 0;
var cue2_CONVENCIONAL = 0;
var cue2_EMPRENDEDOR = 0;
var cue2_ARTÍSTICO = 0;

function cue2() {
  // REALISTA = cue2_p1.value + cue2_p2.value + cue2_p2.value;
  cue2_REALISTA = (cue2_p1.value + cue2_p10.value + cue2_p16.value)
    .split("")
    .filter((char) => char === "a").length;

  cue2_INVESTIGADOR = (cue2_p9.value + cue2_p13.value + cue2_p14.value)
    .split("")
    .filter((char) => char === "a").length;

  cue2_SOCIAL = (cue2_p5.value + cue2_p8.value + cue2_p17.value)
    .split("")
    .filter((char) => char === "a").length;

  cue2_CONVENCIONAL = (cue2_p3.value + cue2_p4.value + cue2_p18.value)
    .split("")
    .filter((char) => char === "a").length;

  cue2_EMPRENDEDOR = (cue2_p7.value + cue2_p12.value + cue2_p15.value)
    .split("")
    .filter((char) => char === "a").length;

  cue2_ARTÍSTICO = (cue2_p2.value + cue2_p6.value + cue2_p11.value)
    .split("")
    .filter((char) => char === "a").length;

  console.log(
    "\ncue2_REALISTA:" + cue2_REALISTA,
    "\ncue2_INVESTIGADOR:" + cue2_INVESTIGADOR,
    "\ncue2_SOCIAL:" + cue2_SOCIAL,
    "\ncue2_CONVENCIONAL:" + cue2_CONVENCIONAL,
    "\ncue2_EMPRENDEDOR:" + cue2_EMPRENDEDOR,
    "\ncue2_ARTÍSTICO:" + cue2_ARTÍSTICO
    // "cue1",
    // cue2_REALISTA,
    // "\npregunta  1:" + cue2_p1.value,
    // "\npregunta  2:" + cue2_p2.value,
    // "\npregunta  3:" + cue2_p3.value
    // "\npregunta  42:" + cue1_p42.value,
    // "\npregunta  43:" + cue1_p43.value,
    // "\npregunta  44:" + cue1_p44.value,
    // "\npregunta  45:" + cue1_p45.value
  );
}

const cue3_p1 = ref("");
const cue3_p2 = ref("");
const cue3_p3 = ref("");
const cue3_p4 = ref("");
const cue3_p5 = ref("");
const cue3_p6 = ref("");
const cue3_p7 = ref("");
const cue3_p8 = ref("");
const cue3_p9 = ref("");
const cue3_p10 = ref("");
const cue3_p11 = ref("");
const cue3_p12 = ref("");
const cue3_p13 = ref("");
const cue3_p14 = ref("");
const cue3_p15 = ref("");
const cue3_p16 = ref("");
const cue3_p17 = ref("");
const cue3_p18 = ref("");

var cue3_REALISTA = 0;
var cue3_INVESTIGADOR = 0;
var cue3_SOCIAL = 0;
var cue3_CONVENCIONAL = 0;
var cue3_EMPRENDEDOR = 0;
var cue3_ARTÍSTICO = 0;

function cue3() {
  // REALISTA = cue2_p1.value + cue2_p2.value + cue2_p2.value;
  cue3_REALISTA = (cue3_p2.value + cue3_p5.value + cue3_p12.value)
    .split("")
    .filter((char) => char === "a").length;

  cue3_INVESTIGADOR = (cue3_p4.value + cue3_p9.value + cue3_p10.value)
    .split("")
    .filter((char) => char === "a").length;

  cue3_SOCIAL = (cue3_p3.value + cue3_p14.value + cue3_p18.value)
    .split("")
    .filter((char) => char === "a").length;

  cue3_CONVENCIONAL = (cue3_p1.value + cue3_p8.value + cue3_p13.value)
    .split("")
    .filter((char) => char === "a").length;

  cue3_EMPRENDEDOR = (cue3_p6.value + cue3_p7.value + cue3_p17.value)
    .split("")
    .filter((char) => char === "a").length;

  cue3_ARTÍSTICO = (cue3_p11.value + cue3_p15.value + cue3_p16.value)
    .split("")
    .filter((char) => char === "a").length;

  console.log(
    "\ncue3_REALISTA:" + cue3_REALISTA,
    "\ncue3_INVESTIGADOR:" + cue3_INVESTIGADOR,
    "\ncue3_SOCIAL:" + cue3_SOCIAL,
    "\ncue3_CONVENCIONAL:" + cue3_CONVENCIONAL,
    "\ncue3_EMPRENDEDOR:" + cue3_EMPRENDEDOR,
    "\ncue3_ARTÍSTICO:" + cue3_ARTÍSTICO
  );
}
const cue4_p1 = ref("");
const cue4_p2 = ref("");
const cue4_p3 = ref("");
const cue4_p4 = ref("");
const cue4_p5 = ref("");

var cue4_REALISTA = 0;
var cue4_INVESTIGADOR = 0;
var cue4_SOCIAL = 0;
var cue4_CONVENCIONAL = 0;
var cue4_EMPRENDEDOR = 0;
var cue4_ARTÍSTICO = 0;

function cue4() {
  switch (cue4_p1.value) {
    case "e":
      cue4_REALISTA++;
      break;
    case "a":
      cue4_INVESTIGADOR++;
      break;

    case "d":
      cue4_SOCIAL++;
      break;

    case "b":
      cue4_CONVENCIONAL++;
      break;

    case "c":
      cue4_EMPRENDEDOR++;
      break;

    case "f":
      cue4_ARTÍSTICO++;
      break;

    default:
      break;
  }

  switch (cue4_p2.value) {
    case "f":
      cue4_REALISTA++;
      break;
    case "c":
      console.log("entrooo", cue4_p1.value);
      cue4_INVESTIGADOR++;
      break;

    case "e":
      cue4_SOCIAL++;
      break;

    case "a":
      cue4_CONVENCIONAL++;
      break;

    case "d":
      cue4_EMPRENDEDOR++;
      break;

    case "b":
      cue4_ARTÍSTICO++;
      break;

    default:
      break;
  }

  switch (cue4_p3.value) {
    case "c":
      cue4_REALISTA++;
      break;
    case "e":
      console.log("entrooo", cue4_p1.value);
      cue4_INVESTIGADOR++;
      break;

    case "a":
      cue4_SOCIAL++;
      break;

    case "f":
      cue4_CONVENCIONAL++;
      break;

    case "b":
      cue4_EMPRENDEDOR++;
      break;

    case "d":
      cue4_ARTÍSTICO++;
      break;

    default:
      break;
  }

  switch (cue4_p4.value) {
    case "b":
      cue4_REALISTA++;
      break;
    case "f":
      console.log("entrooo", cue4_p1.value);
      cue4_INVESTIGADOR++;
      break;

    case "e":
      cue4_SOCIAL++;
      break;

    case "d":
      cue4_CONVENCIONAL++;
      break;

    case "a":
      cue4_EMPRENDEDOR++;
      break;

    case "c":
      cue4_ARTÍSTICO++;
      break;

    default:
      break;
  }

  switch (cue4_p5.value) {
    case "d":
      cue4_REALISTA++;
      break;
    case "c":
      console.log("entrooo", cue4_p1.value);
      cue4_INVESTIGADOR++;
      break;

    case "f":
      cue4_SOCIAL++;
      break;

    case "b":
      cue4_CONVENCIONAL++;
      break;

    case "e":
      cue4_EMPRENDEDOR++;
      break;

    case "a":
      cue4_ARTÍSTICO++;
      break;

    default:
      break;
  }

  console.log(
    "\ncue4_REALISTA:" + cue4_REALISTA,
    "\ncue4_INVESTIGADOR:" + cue4_INVESTIGADOR,
    "\ncue4_SOCIAL:" + cue4_SOCIAL,
    "\ncue4_CONVENCIONAL:" + cue4_CONVENCIONAL,
    "\ncue4_EMPRENDEDOR:" + cue4_EMPRENDEDOR,
    "\ncue4_ARTÍSTICO:" + cue4_ARTÍSTICO
  );
}

var final_REALISTA = 0;
var final_INVESTIGADOR = 0;
var final_SOCIAL = 0;
var final_CONVENCIONAL = 0;
var final_EMPRENDEDOR = 0;
var final_ARTÍSTICO = 0;
function print() {
  final_REALISTA =
    cue1_REALISTA + cue2_REALISTA + cue3_REALISTA + cue4_REALISTA;
  final_INVESTIGADOR =
    cue1_INVESTIGADOR +
    cue2_INVESTIGADOR +
    cue3_INVESTIGADOR +
    cue4_INVESTIGADOR;
  final_SOCIAL =
    cue1_EMPRENDEDOR + cue2_EMPRENDEDOR + cue3_EMPRENDEDOR + cue4_EMPRENDEDOR;
  final_CONVENCIONAL =
    cue1_CONVENCIONAL +
    cue2_CONVENCIONAL +
    cue3_CONVENCIONAL +
    cue4_CONVENCIONAL;
  final_EMPRENDEDOR =
    cue1_EMPRENDEDOR + cue2_EMPRENDEDOR + cue3_EMPRENDEDOR + cue4_EMPRENDEDOR;
  final_ARTÍSTICO =
    cue1_ARTÍSTICO + cue2_ARTÍSTICO + cue3_ARTÍSTICO + cue4_ARTÍSTICO;

  console.log(
    "\nfinal_REALISTA:" + final_REALISTA,
    "\nfinal_INVESTIGADOR:" + final_INVESTIGADOR,
    "\nfinal_SOCIAL:" + final_SOCIAL,
    "\nfinal_CONVENCIONAL:" + final_CONVENCIONAL,
    "\nfinal_EMPRENDEDOR:" + final_EMPRENDEDOR,
    "\nfinal_ARTÍSTICO:" + final_ARTÍSTICO
  );
}
</script>
<template>
  <div id="body-pd" class="container-fluid">
    <!-- charts -->
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card">
          <!-- <div class="card-header">Club's</div> -->
          <div class="">
            <canvas ref="chartRef"></canvas>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="card">
          <!-- <div class="card-header">Club's estado</div> -->
          <div class="">
            <canvas ref="chartRef2"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- cuestionario autoconocimiento 1-->
    <div class="row">
      <div class="col-xl-12 col-sm-12 col-12 mb-3">
        <div class="card shadow-sm border-0">
          <div class="card-content">
            <!-- card body -->
            <div class="card-body">
              <h5 class="card-title">test de autoconocimiento</h5>
              <p class="card-text">
                Marque si o no a todos los adjetivos que describan tu
                personalidad.Trate de definirse tal como es, no como le gustaría
                ser.
              </p>
              <button @click="cue1()">sssss</button>
            </div>
            <!-- cuestionario -->
            <!-- pregunta 1 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>1.- Huraño</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p1"
                    v-model="cue1_p1"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p1"
                    v-model="cue1_p1"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 2 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>2.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p2"
                    v-model="cue1_p2"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p2"
                    v-model="cue1_p2"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 3 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>3.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p3"
                    v-model="cue1_p3"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p3"
                    v-model="cue1_p3"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 4 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>4.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p4"
                    v-model="cue1_p4"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p4"
                    v-model="cue1_p4"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 5 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>5.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p5"
                    v-model="cue1_p5"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p5"
                    v-model="cue1_p5"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 6 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>6.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p6"
                    v-model="cue1_p6"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p6"
                    v-model="cue1_p6"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 7 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>7.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p7"
                    v-model="cue1_p7"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p7"
                    v-model="cue1_p7"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 8 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>8.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p8"
                    v-model="cue1_p8"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p8"
                    v-model="cue1_p8"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 9 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>9.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p9"
                    v-model="cue1_p9"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p9"
                    v-model="cue1_p9"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 10 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>10.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p10"
                    v-model="cue1_p10"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p10"
                    v-model="cue1_p10"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 11 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>11.- Huraño</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p11"
                    v-model="cue1_p11"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p11"
                    v-model="cue1_p11"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 12 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>12.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p12"
                    v-model="cue1_p12"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p12"
                    v-model="cue1_p12"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 13 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>13.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p13"
                    v-model="cue1_p13"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p13"
                    v-model="cue1_p13"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 14 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>14.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p14"
                    v-model="cue1_p14"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p14"
                    v-model="cue1_p14"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 15 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>15.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p15"
                    v-model="cue1_p15"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p15"
                    v-model="cue1_p15"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 16 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>16.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p16"
                    v-model="cue1_p16"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p16"
                    v-model="cue1_p16"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 17 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>17.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p17"
                    v-model="cue1_p17"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p17"
                    v-model="cue1_p17"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 18 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>18.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p18"
                    v-model="cue1_p18"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p18"
                    v-model="cue1_p18"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 19 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>19.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p19"
                    v-model="cue1_p19"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p19"
                    v-model="cue1_p19"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 20 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>20.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p20"
                    v-model="cue1_p20"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p20"
                    v-model="cue1_p20"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 21 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>21.- Huraño</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p21"
                    v-model="cue1_p21"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p21"
                    v-model="cue1_p21"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 22 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>22.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p22"
                    v-model="cue1_p22"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p22"
                    v-model="cue1_p22"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 23 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>23.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p23"
                    v-model="cue1_p23"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p23"
                    v-model="cue1_p23"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 24 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>24.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p24"
                    v-model="cue1_p24"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p24"
                    v-model="cue1_p24"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 25 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>25.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p25"
                    v-model="cue1_p25"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p25"
                    v-model="cue1_p25"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 26 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>26.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p26"
                    v-model="cue1_p26"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p26"
                    v-model="cue1_p26"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 27 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>27.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p27"
                    v-model="cue1_p27"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p27"
                    v-model="cue1_p27"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 28 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>28.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p28"
                    v-model="cue1_p28"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p28"
                    v-model="cue1_p28"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 29 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>29.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p29"
                    v-model="cue1_p29"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p29"
                    v-model="cue1_p29"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 30 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>30.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p30"
                    v-model="cue1_p30"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p30"
                    v-model="cue1_p30"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 31 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>31.- Huraño</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p31"
                    v-model="cue1_p31"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p31"
                    v-model="cue1_p31"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 32 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>32.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p32"
                    v-model="cue1_p32"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p32"
                    v-model="cue1_p32"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 33 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>33.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p33"
                    v-model="cue1_p33"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p33"
                    v-model="cue1_p33"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 34 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>34.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p34"
                    v-model="cue1_p34"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p34"
                    v-model="cue1_p34"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 5 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>35.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p35"
                    v-model="cue1_p35"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p35"
                    v-model="cue1_p35"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 36 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>36.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p36"
                    v-model="cue1_p36"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p36"
                    v-model="cue1_p36"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 37 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>37.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p37"
                    v-model="cue1_p37"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p37"
                    v-model="cue1_p37"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 38 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>38.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p38"
                    v-model="cue1_p38"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p38"
                    v-model="cue1_p38"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 39 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>39.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p39"
                    v-model="cue1_p39"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p39"
                    v-model="cue1_p39"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 40 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>40.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p40"
                    v-model="cue1_p40"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p40"
                    v-model="cue1_p40"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 41 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>41.- Huraño</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p41"
                    v-model="cue1_p41"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p41"
                    v-model="cue1_p41"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 42 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>42.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p42"
                    v-model="cue1_p42"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p42"
                    v-model="cue1_p42"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 43 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>43.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p43"
                    v-model="cue1_p43"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p43"
                    v-model="cue1_p43"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 44 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>44.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p44"
                    v-model="cue1_p44"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p44"
                    v-model="cue1_p44"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- pregunta 45 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>45.- Generoso</h6>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p45"
                    v-model="cue1_p45"
                    value="1"
                  /><label class="form-check-label">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue1_p45"
                    v-model="cue1_p45"
                    value="0"
                  /><label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <!-- ----------------- -->
          </div>
        </div>
      </div>
    </div>

    <!-- cuestionario autoconocimiento 2 -->
    <div class="row">
      <div class="col-xl-12 col-sm-12 col-12 mb-3">
        <div class="card shadow-sm border-0">
          <div class="card-content">
            <!-- card body -->
            <div class="card-body">
              <h5 class="card-title">test 2</h5>
              <p class="card-text">
                Marque si o no a todos los adjetivos que describan tu
                personalidad.Trate de definirse tal como es, no como le gustaría
                ser.
              </p>
              <button @click="cue2()">sssss</button>
            </div>
            <!-- cuestionario 2 -->
            <!-- pregunta 1 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>1.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p1"
                    v-model="cue2_p1"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p1"
                    v-model="cue2_p1"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p1"
                    v-model="cue2_p1"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 2 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>2.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p2"
                    v-model="cue2_p2"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p2"
                    v-model="cue2_p2"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p2"
                    v-model="cue2_p2"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 3 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>3.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p3"
                    v-model="cue2_p3"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p3"
                    v-model="cue2_p3"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p3"
                    v-model="cue2_p3"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 4 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>4.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p4"
                    v-model="cue2_p4"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p4"
                    v-model="cue2_p4"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p4"
                    v-model="cue2_p4"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 5 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>5.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p5"
                    v-model="cue2_p5"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p5"
                    v-model="cue2_p5"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p5"
                    v-model="cue2_p5"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 6 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>6.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p6"
                    v-model="cue2_p6"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p6"
                    v-model="cue2_p6"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p6"
                    v-model="cue2_p6"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 7 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>7.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p7"
                    v-model="cue2_p7"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p7"
                    v-model="cue2_p7"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p7"
                    v-model="cue2_p7"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 8 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>8.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p8"
                    v-model="cue2_p8"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p8"
                    v-model="cue2_p8"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p8"
                    v-model="cue2_p8"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 9 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>9.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p9"
                    v-model="cue2_p9"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p9"
                    v-model="cue2_p9"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p9"
                    v-model="cue2_p9"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 10 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>10.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p10"
                    v-model="cue2_p10"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p10"
                    v-model="cue2_p10"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p10"
                    v-model="cue2_p10"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 11 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>11.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p11"
                    v-model="cue2_p11"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p11"
                    v-model="cue2_p11"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p11"
                    v-model="cue2_p11"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 12 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>12.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p12"
                    v-model="cue2_p12"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p12"
                    v-model="cue2_p12"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p12"
                    v-model="cue2_p12"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 13 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>13.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p13"
                    v-model="cue2_p13"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p13"
                    v-model="cue2_p13"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p13"
                    v-model="cue2_p13"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 14 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>14.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p14"
                    v-model="cue2_p14"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p14"
                    v-model="cue2_p14"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p14"
                    v-model="cue2_p14"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 15 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>15.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p15"
                    v-model="cue2_p15"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p15"
                    v-model="cue2_p15"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p15"
                    v-model="cue2_p15"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 16 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>16.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p16"
                    v-model="cue2_p16"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p16"
                    v-model="cue2_p16"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p16"
                    v-model="cue2_p16"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 17 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>17.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p17"
                    v-model="cue2_p17"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p17"
                    v-model="cue2_p17"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p17"
                    v-model="cue2_p17"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 18 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>18.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p18"
                    v-model="cue2_p18"
                    value="a"
                  /><label class="form-check-label">a. Más que los demás</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p18"
                    v-model="cue2_p18"
                    value="b"
                  /><label class="form-check-label"
                    >b. Igual que los demás
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue2_p18"
                    v-model="cue2_p18"
                    value="c"
                  /><label class="form-check-label"
                    >c. Menos que los demás</label
                  >
                </div>
              </div>
            </div>

            <!-- ----------------- -->
          </div>
        </div>
      </div>
    </div>

    <!-- cuestionario autoconocimiento 3 -->
    <div class="row">
      <div class="col-xl-12 col-sm-12 col-12 mb-3">
        <div class="card shadow-sm border-0">
          <div class="card-content">
            <!-- card body -->
            <div class="card-body">
              <h5 class="card-title">test 2</h5>
              <p class="card-text">
                Marque si o no a todos los adjetivos que describan tu
                personalidad.Trate de definirse tal como es, no como le gustaría
                ser.
              </p>
              <button @click="cue3()">sssss</button>
            </div>
            <!-- cuestionario 2 -->
            <!-- pregunta 1 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>1.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p1"
                    v-model="cue3_p1"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p1"
                    v-model="cue3_p1"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p1"
                    v-model="cue3_p1"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 2 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>2.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p2"
                    v-model="cue3_p2"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p2"
                    v-model="cue3_p2"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p2"
                    v-model="cue3_p2"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 3 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>3.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p3"
                    v-model="cue3_p3"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p3"
                    v-model="cue3_p3"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p3"
                    v-model="cue3_p3"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 4 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>4.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p4"
                    v-model="cue3_p4"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p4"
                    v-model="cue3_p4"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p4"
                    v-model="cue3_p4"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 5 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>5.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p5"
                    v-model="cue3_p5"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p5"
                    v-model="cue3_p5"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p5"
                    v-model="cue3_p5"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 6 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>6.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p6"
                    v-model="cue3_p6"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p6"
                    v-model="cue3_p6"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p6"
                    v-model="cue3_p6"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 7 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>7.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p7"
                    v-model="cue3_p7"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p7"
                    v-model="cue3_p7"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p7"
                    v-model="cue3_p7"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 8 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>8.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p8"
                    v-model="cue3_p8"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p8"
                    v-model="cue3_p8"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p8"
                    v-model="cue3_p8"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 9 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>9.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p9"
                    v-model="cue3_p9"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p9"
                    v-model="cue3_p9"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p9"
                    v-model="cue3_p9"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 10 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>10.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p10"
                    v-model="cue3_p10"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p10"
                    v-model="cue3_p10"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p10"
                    v-model="cue3_p10"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 11 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>11.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p11"
                    v-model="cue3_p11"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p11"
                    v-model="cue3_p11"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p11"
                    v-model="cue3_p11"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 12 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>12.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p12"
                    v-model="cue3_p12"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p12"
                    v-model="cue3_p12"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p12"
                    v-model="cue3_p12"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 13 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>13.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p13"
                    v-model="cue3_p13"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p13"
                    v-model="cue3_p13"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p13"
                    v-model="cue3_p13"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 14 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>14.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p14"
                    v-model="cue3_p14"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p14"
                    v-model="cue3_p14"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p14"
                    v-model="cue3_p14"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 15 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>15.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p15"
                    v-model="cue3_p15"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p15"
                    v-model="cue3_p15"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p15"
                    v-model="cue3_p15"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 16 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>16.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p16"
                    v-model="cue3_p16"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p16"
                    v-model="cue3_p16"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p16"
                    v-model="cue3_p16"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 17 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>17.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p17"
                    v-model="cue3_p17"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p17"
                    v-model="cue3_p17"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p17"
                    v-model="cue3_p17"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- pregunta 18 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>18.- Huraño</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p18"
                    v-model="cue3_p18"
                    value="a"
                  /><label class="form-check-label">a. Muy Importante</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p18"
                    v-model="cue3_p18"
                    value="b"
                  /><label class="form-check-label"
                    >b. Más o Menos Importante
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue3_p18"
                    v-model="cue3_p18"
                    value="c"
                  /><label class="form-check-label">c. Poco Importante</label>
                </div>
              </div>
            </div>

            <!-- ----------------- -->
          </div>
        </div>
      </div>
    </div>

    <!-- cuestionario autoconocimiento 4 -->
    <div class="row">
      <div class="col-xl-12 col-sm-12 col-12 mb-3">
        <div class="card shadow-sm border-0">
          <div class="card-content">
            <!-- card body -->
            <div class="card-body">
              <h5 class="card-title">test 2</h5>
              <p class="card-text">
                Marque si o no a todos los adjetivos que describan tu
                personalidad.Trate de definirse tal como es, no como le gustaría
                ser.
              </p>
              <button @click="cue4()">sssss</button>
            </div>
            <!-- cuestionario 2 -->
            <!-- pregunta 1 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>1. Me gusta…</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p1"
                    v-model="cue4_p1"
                    value="a"
                  /><label class="form-check-label"
                    >a. Leer y meditar sobre los problemas</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p1"
                    v-model="cue4_p1"
                    value="b"
                  /><label class="form-check-label"
                    >b. Anotar datos y hacer cómputos
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p1"
                    v-model="cue4_p1"
                    value="c"
                  /><label class="form-check-label"
                    >c. Tener una posición poderosa</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p1"
                    v-model="cue4_p1"
                    value="d"
                  /><label class="form-check-label"
                    >d. Enseñar o ayudar a los demás</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p1"
                    v-model="cue4_p1"
                    value="e"
                  /><label class="form-check-label"
                    >e. Trabajar manualmente, usar equipos,herramientas</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p1"
                    v-model="cue4_p1"
                    value="f"
                  /><label class="form-check-label"
                    >f. Usar mi talento artístico</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 2 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>2. Mi mayor habilidad se manifiesta en…</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p2"
                    v-model="cue4_p2"
                    value="a"
                  /><label class="form-check-label">a. Negocios</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p2"
                    v-model="cue4_p2"
                    value="b"
                  /><label class="form-check-label">b. Artes </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p2"
                    v-model="cue4_p2"
                    value="c"
                  /><label class="form-check-label">c. Ciencias</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p2"
                    v-model="cue4_p2"
                    value="d"
                  /><label class="form-check-label">d. Liderazgo</label>
                </div>
                v
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p2"
                    v-model="cue4_p2"
                    value="e"
                  /><label class="form-check-label"
                    >e. Relaciones Humanas</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p2"
                    v-model="cue4_p2"
                    value="f"
                  /><label class="form-check-label">f. Mecánica</label>
                </div>
              </div>
            </div>

            <!-- pregunta 3 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>3. Soy muy incompetente en…</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p3"
                    v-model="cue4_p3"
                    value="a"
                  /><label class="form-check-label">a. Mecánica</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p3"
                    v-model="cue4_p3"
                    value="b"
                  /><label class="form-check-label">b. Ciencia </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p3"
                    v-model="cue4_p3"
                    value="c"
                  /><label class="form-check-label"
                    >c. Relaciones Humanas</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p3"
                    v-model="cue4_p3"
                    value="d"
                  /><label class="form-check-label">d. Negocios</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p3"
                    v-model="cue4_p3"
                    value="e"
                  /><label class="form-check-label">e. Liderazgo</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p3"
                    v-model="cue4_p3"
                    value="f"
                  /><label class="form-check-label">f. Artes</label>
                </div>
              </div>
            </div>

            <!-- pregunta 4 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>
                  4. Si tuviera que realizar alguna de estas actividades, la que
                  menos me agradaría es…
                </h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p4"
                    v-model="cue4_p4"
                    value="a"
                  /><label class="form-check-label"
                    >a. Participar en actividades sociales muy formales</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p4"
                    v-model="cue4_p4"
                    value="b"
                  /><label class="form-check-label"
                    >b. Tener una posición de responsabilidad
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p4"
                    v-model="cue4_p4"
                    value="c"
                  /><label class="form-check-label"
                    >c. Llevar pacientes mentales a actividades
                    recreativas</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p4"
                    v-model="cue4_p4"
                    value="d"
                  /><label class="form-check-label"
                    >d. Llevar registros exactos y complejos</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p4"
                    v-model="cue4_p4"
                    value="e"
                  /><label class="form-check-label">e. Escribir un poema</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p4"
                    v-model="cue4_p4"
                    value="f"
                  /><label class="form-check-label"
                    >f. Hacer algo que exija paciencia y precisión</label
                  >
                </div>
              </div>
            </div>

            <!-- pregunta 5 -->
            <div class="card-body">
              <div class="media-body text-left col mr1 shadow-sm p-1 rounded">
                <h6>5. Las materias que más me gustan son…</h6>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p5"
                    v-model="cue4_p5"
                    value="a"
                  /><label class="form-check-label">a. Arte</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p5"
                    v-model="cue4_p5"
                    value="b"
                  /><label class="form-check-label"
                    >b. Administración, contabilidad
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p5"
                    v-model="cue4_p5"
                    value="c"
                  /><label class="form-check-label">c. Química, Física</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p5"
                    v-model="cue4_p5"
                    value="d"
                  /><label class="form-check-label"
                    >d. Educación tecnológica, Mecánica</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p5"
                    v-model="cue4_p5"
                    value="e"
                  /><label class="form-check-label">e. Historia</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input border-dark"
                    type="radio"
                    name="cue4_p5"
                    v-model="cue4_p5"
                    value="f"
                  /><label class="form-check-label"
                    >f. Ciencias sociales, Filosofía</label
                  >
                </div>
              </div>
            </div>

            <!-- ----------------- -->
          </div>
        </div>
      </div>
    </div>
    <button class="" @click="print()">resolver</button>
  </div>
</template>

<style>
@import "@/assets/css/bootstrap.min.css";
/* @import "bootstrap-icons/font/bootstrap-icons.css"; */
@import "@/assets/css/styles.css";
</style>
