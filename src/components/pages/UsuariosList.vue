<script setup lang="ts">
import type { Usuario } from "@/types/usuario";
import { onMounted, ref, watch } from "vue";
import http from "@/plugins/axios";
import { Modal } from "bootstrap";

let modal: Modal;
const modalnuevo = ref<HTMLElement | null>(null);
let Modalprincipal: Modal;
var modelSeleccionado = ref("");

//funciones que se llaman al iniciar la pagina
onMounted(() => {
  modalUtil();
  getListar();
});

//funcion que llama al modal
const modalRef = ref<HTMLElement | null>(null);
function modalUtil() {
  Modalprincipal = modalnuevo.value
    ? new Modal(modalnuevo.value)
    : Modalprincipal;

  (document.getElementById("btnModal") as HTMLElement).addEventListener(
    "click",
    () => {
      modelSeleccionado.value = "nuevo";
      usuario.value = "";
      clave.value = "";
      nombre.value = "";
      apellido.value = "";
      rol.value = "0";
      Modalprincipal.show();
    }
  );
}

//endpoint de la pagina
const props = defineProps<{
  ENDPOINT_API: string;
}>();
const ENDPOINT = props.ENDPOINT_API;

// paginacion y llamada de datos
const listar = ref<Usuario[]>([]);

const pagina = ref(1);
const limite = 10;
const totalpag = ref(0);
const total = ref();
const busqueda = ref("");
const colegiosList = ref();

//funcion acceso a dom para modificacion de variable paginacion
watch(pagina, function () {
  modalUtil();
  getListar();
});

async function getListar() {
  await http
    .get(
      `${ENDPOINT}?limite=${limite}&pagina=${pagina.value}&busqueda=${busqueda.value}`
    )
    .then((response) => {
      listar.value = response.data.data;
      totalpag.value = response.data.totalpag;
      total.value = response.data.totalreg;
      colegiosList.value = response.data.colegiosList;
    });
  // console.log(listar.value);
}

var id: number;
const usuario = ref("");
const nombre = ref("");
const apellido = ref("");
const clave = ref("");
const rol = ref();

async function crearNuevo() {
  console.log("usuario", usuario.value);
  console.log("clave", clave.value);
  console.log("nombre", nombre.value);
  console.log("apellido", apellido.value);
  console.log("rol", rol.value);
  Modalprincipal.hide;
  await http
    .post(ENDPOINT, {
      usuario: usuario.value,
      clave: clave.value,
      nombre: nombre.value,
      apellido: apellido.value,
      rol: rol.value,
    })
    .catch((error) => {
      console.log(error);
    });
  getListar();
}

async function llamarModificar(idn: number) {
  clave.value = "";
  modelSeleccionado.value = "editar";
  id = idn;

  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    usuario.value = response.data.usuario;
    nombre.value = response.data.nombre;
    apellido.value = response.data.apellido;
    rol.value = response.data.rol;
  });
  Modalprincipal.show();
  // console.log("nombre", nombre.value);
  // console.log("rude", rude.value);
  // console.log("carnet", carnet.value);
  // console.log("nacimiento", nacimiento.value);
}

async function guardarModificado() {
  console.log("usuario", usuario.value);
  console.log("clave", clave.value);
  console.log("nombre", nombre.value);
  console.log("apellido", apellido.value);
  console.log("rol", rol.value);
  console.log("id sabe", id);
  await http.patch(`${ENDPOINT}/${id}`, {
    usuario: usuario.value,
    clave: clave.value,
    nombre: nombre.value,
    apellido: apellido.value,
    rol: rol.value,
  });
  // console.log(colegio.value);
  getListar();
  Modalprincipal.hide();
}

async function eliminar(id: number) {
  // console.log("eliminar id:", id);

  var r = confirm("¿Está seguro que se desea eliminar el Intérprete?");
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getListar());
  }
}
</script>
<template>
  <!-- main  -->
  <div id="body-pd" class="container-fluid main-pd mr-tp">
    <div class="row">
      <div class="col-xl-12 col-sm-12 col-12 mb-3">
        <div class="card shadow-sm tabh">
          <div class="card-header">
            <div class="row flex-between-end">
              <div class="col-auto align-self-center">
                <h5 class="mb-0" data-anchor="data-anchor" id="search-example">
                  Usuarios<a
                    class="anchorjs-link"
                    aria-label="Anchor"
                    data-anchorjs-icon="#"
                    href="#search-example"
                    style="padding-left: 0.375em"
                  ></a>
                </h5>
              </div>
            </div>
          </div>
          <div class="card-header border-0">
            <div id="example_wrapper" class="dataTables_wrapper dt-bootstrap5">
              <div class="row">
                <div class="col-8">
                  <div>
                    <button
                      class="btn btn-outline-secondary btn-sm"
                      id="btnModal"
                      title="Nuevo usuario"
                    >
                      <i class="bi bi-plus-circle-fill"></i>Nuevo
                    </button>


                  </div>
                </div>
                <div class="col-4">
                  <div>
                    <input
                      type="search"
                      class="form-control form-control-sm"
                      v-model="busqueda"
                      v-on:input="getListar"
                      placeholder="Buscar.."
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 table-responsive tabh">
                  <table class="table table-sm table-hover table-auto  ">
                    <thead >
                      <tr class="table-secondary ">
                        <th scope="col">No</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in listar.values()">
                        <td>{{ item.numero }}</td>
                        <td>{{ item.usuario }}</td>
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.apellido }}</td>
                        <td>
                          <span
                            style="width: 58px"
                            v-if="item.rol == '1'"
                            class="badge bg-primary text-center"
                          >
                            Admin
                          </span>
                          <span
                            v-if="item.rol == '0'"
                            style="width: 58px"
                            class="badge bg-secondary text-center"
                          >
                            Usuario
                          </span>
                        </td>
                        <td>
                          <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                            title="Editar"
                              type="button"
                              class="btn btn btn-outline-primary btn-sm"
                              @click="llamarModificar(item.id)"
                            >
                              <i class="bi bi-pencil-square"></i>
                            </button>
                            <button
                            title="Eliminar"
                              type="button"
                              class="btn btn btn-outline-danger btn-sm"
                              @click="eliminar(item.id)"
                            >
                              <i class="bi bi-trash3-fill"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-5">
                    <div class="dataTables_info">
                      Pagina {{ pagina }} de {{ totalpag }} - total registros
                      {{ total }}
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-7">
                    <nav>
                      <ul class="pagination pagination-sm">
                        <div
                          v-bind:class="{ disabled: pagina === 1 }"
                          class="page-item"
                        >
                          <button
                            id="pag_ant"
                            title="Pagina anterior "
                            class="page-item page-link"
                            @click="pagina--"
                          >
                            Anterior
                          </button>
                        </div>
                        <div v-for="itempage in totalpag">
                          <li
                            v-bind:class="{ active: pagina === itempage }"
                            class="page-item"
                            aria-current="page"
                            v-if="
                              itempage > pagina - 3 && itempage < pagina + 3
                            "
                            @click="pagina = itempage"
                          >
                            <a class="page-link" href="#"> {{ itempage }}</a>
                          </li>
                        </div>
                        <div
                          v-bind:class="{ disabled: pagina === totalpag }"
                          class="page-item btn-sm"
                        >
                          <button
                            id="pag_ant"
                            title="Pagina anterior "
                            class="page-item page-link"
                            @click="pagina++"
                          >
                            Siguiente
                          </button>
                        </div>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal nuevo -->
  <div
    class="modal fade"
    id="modalNuevo"
    tabindex="-1"
    aria-hidden="true"
    ref="modalnuevo"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">nuevo</h5>
        </div>
        <div class="modal-body">
          <form class="row g-1" @submit.prevent="crearNuevo">


            



            <div class="col-md-12">
              <label>Usuario</label>
              <input
                type="text"
                class="form-control"
                v-model="usuario"
                required
              />
            </div>
            <div class="col-md-12">
              <label>clave</label>
              <input
                type="password"
                class="form-control"
                v-model="clave"
                required
              />
            </div>
            <div class="col-md-12">
              <label>Nombre</label>
              <input
                type="text"
                class="form-control"
                v-model="nombre"
                required
              />
            </div>
            <div class="col-md-12">
              <label>Apellido</label>
              <input
                type="text"
                class="form-control"
                v-model="apellido"
                required
              />
            </div>

            <div class="col-md-12">
              <label>rol</label>
              <div class="form-control">
                <div class="form-radio form-check form-check-inline">
                  <input
                    class="form-check-input"
                    name="rolusernew"
                    v-model="rol"
                    value="0"
                    type="radio"
                    :checked="rol === '0'"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Usuario</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    name="rolusernew"
                    v-model="rol"
                    value="1"
                    type="radio"
                    :checked="rol === '1'"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Adminstrador</label
                  >
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-dismiss="modal"
                type="button"
              >
                Cancelar
              </button>
              <button
                type="submit"
                class="btn btn-success"
                v-if="modelSeleccionado == 'nuevo'"
              >
                Crear
              </button>
              <button
                type="button"
                class="btn btn-success"
                v-if="modelSeleccionado == 'editar'"
                @click.prevent="guardarModificado()"
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
