import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/index";
// import HomeView from "@/views/HomeView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import { getTokenFromLocalStorage } from "@/helpers";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: "/", name: "home", component: HomeView },
    { path: "/login", name: "login", component: LoginView },
    // { path: "/logtest", name: "logtest", component: LoginTest },

    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/home.vue"),
        },
      ],
    },

    {
      path: "/logtest",
      name: "logtest",
      component: () => import("../views/LoginTestView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/test/loginTest.vue"),
        },
        {
          path: "/bienvenida",
          component: () => import("../components/test/bienvenida.vue"),
        },
        {
          path: "/test1",
          component: () => import("../components/test/test1.vue"),
        },
        {
          path: "/resultado",
          component: () => import("../components/test/resol1.vue"),
        },
        {
          path: "/test2",
          component: () => import("../components/test/test2.vue"),
        },
      ],
    },

    {
      path: "/usuarios",
      name: "usuarios",
      component: () => import("../views/UsuariosView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/pages/UsuariosList.vue"),
        },
      ],
    },

    {
      path: "/estudiante",
      name: "estudiante",
      component: () => import("../views/EstudianteView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/pages/estudiante.vue"),
        },
      ],
    },

    {
      path: "/facultad",
      name: "facultad",
      component: () => import("../views/FacultadView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/pages/facultad.vue"),
        },
      ],
    },

    {
      path: "/colegio",
      name: "colegio",
      component: () => import("../views/ColegioView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/pages/colegio.vue"),
        },
      ],
    },


    {
      path: "/test-vocacional",
      name: "test-vocacional",
      component: () => import("../views/TestVocacionalView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/pages/tetVocacional.vue"),
        },
      ],
    },

    {
      path: "/test-autoconocimiento",
      name: "test-autoconocimiento",
      component: () => import("../views/ TestAutoconocimientoView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/pages/testAutoconocimiento.vue"),
        },
      ],
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/pages/dashboard.vue"),
        },
      ],
    },
  ],
});

router.beforeEach(async (to) => {
  const publicPages = ["/","/login", "/logtest", "/bienvenida","/test1", "/res1","/test2", "/resultado"];
  // const publicPages = ["/"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && getTokenFromLocalStorage()) {  ///se comentoooo!!!
    if (authStore) authStore.logout();
    authStore.returnUrl = to.fullPath;
    return "/";

    // return "/logtest";
  }
});

export default router;
