<script setup>
import { ref } from 'vue'

const novoUsuario = ref(false)
function addNovoUsuario () {
  novoUsuario.value = !novoUsuario.value
}

const columns = [
  {
    name: 'nome',
    required: true,
    label: 'Nome',
    align: 'center',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
  { name: 'telefone', align: 'center', label: 'Telefone', field: 'telefone', sortable: true },
  { name: 'perfil', align: 'center', label: 'Perfil', field: 'perfil' },
  { name: 'status', align: 'center', label: 'Status', field: 'status' },
  { name: 'acoes', align: 'center', label: 'Ações', field: 'acoes' }
]

const rows = [
  {
    name: 'Charlesson',
    email: 'charlessonmendes@gmail.com',
    telefone: '(77)99115-3244',
    perfil: 'Admin',
    status: 'Ativo',
    acoes: ''
  }
]
</script>

<template>
  <q-card class="my-card">
    <q-toolbar-title id="cabecalho">
      <q-avatar>
        <img
          alt="logo-prefeitura"
          src="../assets/group_FILL0_wght400_GRAD0_opsz24.svg"
          style="width: 30px;"
        >
      </q-avatar>
      Usuários
    </q-toolbar-title>
    <q-card-section v-if="!novoUsuario">
      <div class="row">
        <q-btn class="col-2 q-mr-xl" color="primary" @click="addNovoUsuario">+ Novo Usuário</q-btn>
        <q-input class="col-6 q-ml-xl" filled label="Pesquisar ...">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </q-card-section>
    <q-card-section v-if="!novoUsuario">
      <div class="q-pa-md">
        <q-table
          separator="cell"
          flat bordered
          title="Lista de usuários"
          :rows="rows"
          dense
          :columns="columns"
          row-key="name"
        />
      </div>
    </q-card-section>
    <q-card-section v-if="novoUsuario">
      <div class="row">
        <div class="col-6">
          <q-input class="q-ma-md" filled label="Nome"></q-input>
          <q-input class="q-ma-md" filled label="E-mail"></q-input>
          <q-input class="q-ma-md" filled label="Telefone"></q-input>
          <q-input class="q-ma-md" filled label="Perfil"></q-input>
        </div>
        <div class="col-6">
          <q-input class="q-ma-md" filled label="Status"></q-input>
          <q-input class="q-ma-md" filled label="Senha"></q-input>
          <q-input class="q-ma-md" filled label="Repetir senha"></q-input>
        </div>
      </div>
      <div class="row q-ma-md">
        <q-btn class="q-mr-md" color="primary" @click="addNovoUsuario">Adicionar</q-btn>
        <q-btn color="negative" @click="addNovoUsuario">Cancelar</q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
#cabecalho {
  background-color: Gainsboro;
}
</style>
