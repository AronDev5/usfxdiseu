<template>
  <div class="container-fluid">
    <div class="row mt-5 mb-5 text-center"><h1>Test Vocacional</h1></div>
    <div class="row">
      <div
        class="col d-flex align-items-center justify-content-center flex-column mt-5"
      >
        <div class="col-md-9 m-4">
          <!-- <h4 class="card-title">Custom animated radio button</h4> -->
          <h3 class="card-description">
            ¿Aceptarías trabajar escribiendo artículos en la sección económica
            de un diario?
          </h3>
          <form>
            <div class="mt-4">
              <div class="">
                <input
                  type="radio"
                  class="option-input radio"
                  name="example"
                  style="width: 2rem; height: 2rem; vertical-align: text-bottom"
                />
                <label class="fs-4"> Si </label>
              </div>
              <div class="mt-2">
                <input
                  type="radio"
                  class="option-input radio"
                  name="example"
                  style="width: 2rem; height: 2rem; vertical-align: text-bottom"
                />
                <label class="fs-4"> No </label>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
              <button class="btn btn-primary">Siguiente</button>
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
          style="width: 25%"
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
