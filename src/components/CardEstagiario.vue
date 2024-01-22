<script setup>
import { ref } from 'vue'

const modeloStatus = ref(null)
const opcoes = ['Ativo', 'Inativo']

const novoEstagiario = ref(false)
function addNovoEstagiario () {
  novoEstagiario.value = !novoEstagiario.value
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
      Estagiários
    </q-toolbar-title>
    <div v-if="!novoEstagiario">
      <q-card-section>
        <div class="row">
          <q-btn class="col-2 q-mr-xl" color="primary" @click="addNovoEstagiario">+ Novo Estagiário</q-btn>
          <q-input dense class="col-6 q-ml-xl" filled label="Pesquisar ...">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn class="col-2 q-ml-lg" color="primary">Pesquisar</q-btn>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-md">
          <q-table
            separator="cell"
            flat bordered
            title="Lista de estagiários"
            :rows="rows"
            dense
            :columns="columns"
            row-key="name"
          />
        </div>
      </q-card-section>
    </div>
    <q-card-section v-if="novoEstagiario">
      <div class="row">
          <div class="col-6">
            <q-input class="q-ma-md" filled label="Nome"></q-input>
            <q-input class="q-ma-md" filled label="E-mail"></q-input>
            <q-input class="q-ma-md" filled label="Telefone"></q-input>
            <q-select v-model="modeloStatus" class="q-ma-md" filled :options="opcoes" label="Status" />
          </div>
          <div class="col-6">
            <q-input class="q-ma-md" filled label="Senha"></q-input>
            <q-input class="q-ma-md" filled label="Repetir senha"></q-input>
          </div>
        </div>
        <div class="row q-ma-md">
          <q-btn class="q-mr-md" color="primary" @click="addNovoEstagiario">Adicionar</q-btn>
          <q-btn color="negative" @click="addNovoEstagiario">Cancelar</q-btn>
        </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
#cabecalho {
  background-color: Gainsboro;
}
</style>
