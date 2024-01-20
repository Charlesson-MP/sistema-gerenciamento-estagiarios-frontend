<script setup>
import CardDashboards from 'src/components/CardDashboards.vue'
</script>

<template>
  <q-page padding class="row q-gutter-x-md q-gutter-y-md flex flex-center">
    <div class="col-5">
      <CardDashboards
        style="background-image: linear-gradient(to right, rgb(59, 194, 187), rgb(2, 161, 161), rgb(0, 99, 99));"
        titulo="Total de estagiários"
      ></CardDashboards>
    </div>
    <div class="col-5">
      <CardDashboards
        style="background-image: linear-gradient(to right, rgb(11, 66, 148), rgb(53, 99, 167), rgb(112, 159, 228));"
        titulo="Estagiários de férias"
      ></CardDashboards>
    </div>
    <div class="col-5">
      <CardDashboards
        style="background-image: linear-gradient(to right, OrangeRed, DarkOrange, Orange);"
        titulo="Finalizando contrato"
      ></CardDashboards>
    </div>
  </q-page>
</template>
