<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/index";
import { onMounted } from "@vue/runtime-dom";
const authStore = useAuthStore();
const avataruser = localStorage.getItem("avatar");
const nameuser = localStorage.getItem("user");
const rol = localStorage.getItem("rol");
const linkActive = window.location.pathname;

function sidebarmenu() {
  const sidebarToggle = document.body.querySelector(
    "#header-toggle"
  ) as HTMLElement;

  sidebarToggle.addEventListener("click", (event) => {
    console.log("entro");
    const sidebar = document.getElementById("nav-bar") as HTMLElement;
    const header = document.getElementById("header") as HTMLElement;
    const main = document.getElementById("body-pd") as HTMLElement;

    sidebar?.classList.toggle("shownav");
    main?.classList.toggle("main-pd");
    main?.classList.toggle("main-pd2");
  });
}

onMounted(() => {
  sidebarmenu();
});
</script>

<template>
  <header id="header" class="header">
    <div class="d-flex justify-content-between">
      <div class="d-flex justify-content-start">
        <i
          type="button"
          class="btn btn-outline-secondary btn-sm bi bi-list"
          id="header-toggle"
        ></i>
        <a href="#" class="nav_logo">
          <span class="nav_logo-name">test-Vocacional</span>
        </a>
      </div>
      <div class="d-flex justify-content-end">
        <div class="flex-shrink-0 me-1 align-self-center">
          <span class="fs-8">Admin </span>
        </div>
        <div class="flex-shrink-0">
          <img
            src="https://portal1.iff.edu.br/desenvolvimento-institucional/imagens/avatar.jpg/@@images/image.jpeg"
            class="rounded-circle border border-dark"
            width="32"
            height="32"
          />
        </div>
      </div>
      
    </div>
  </header>

  <div
    class="d-flex flex-column flex-shrink-0 bg-light l-navbar shownav"
    id="nav-bar"
  >
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <a
          href="/"
          id="dashboard"
          class="nav_link"
          :class="{ active: linkActive === '/' || linkActive === '/login' }"
        >
          <i class="bi bi-speedometer2" title="Dashboard"></i>
          <span class="nav_name">Dashboard</span>
        </a>
      </li>
      <hr />
      <li>
        <a href="/estudiante" class="nav_link">
          <i class="bi bi-person-badge" title="estudiante"></i>
          <span class="nav_name">Estudiante</span>
        </a>
      </li>
      <li>
        <a href="/colegio" class="nav_link">
          <i class="bi bi-person-badge" title="colegio"></i>
          <span class="nav_name">Colegio</span>
        </a>
      </li>
      <li>
        <a href="/facultad" class="nav_link">
          <i class="bi bi-person-badge" title="estudiante"></i>
          <span class="nav_name">Facultad</span>
        </a>
      </li>
      <li>
        <a href="/test-autoconocimiento" class="nav_link">
          <i class="bi bi-person-badge" title="Test-Autoconocimiento"></i>
          <span class="nav_name">Test-Autoconocimiento</span>
        </a>
      </li>

      <li>
        <a href="/test-vocacional" class="nav_link">
          <i class="bi bi-person-badge" title="estudiante"></i>
          <span class="nav_name">Test Vocacional</span>
        </a>
      </li>

      <hr />
      <li>
        <a
          href="/usuarios"
          class="nav_link"
          :class="{ active: linkActive === '/usuarios' }"
        >
          <i class="bi bi-person-fill-gear" title="Usuarios"></i>
          <span class="nav_name">Usuarios</span>
          
        </a>
      </li>
    </ul>
    <hr>
    
    <div >
      <a @click="authStore.logout()" class="nav_link nav nav-pills flex-column mb-auto ">
        <i class="bi bi-box-arrow-left"></i>
        <span class="nav_name">Salir</span>
        
      </a>
    </div>
  </div>

  <!-- fin panel superior-->
</template>
