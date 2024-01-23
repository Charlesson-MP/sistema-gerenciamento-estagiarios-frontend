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
        <q-form class="row q-gutter-y-md q-gutter-y-md"
          ref="myForm"
        >
          <q-btn class="col-xs-12 col-sm-2 col-md-2 col-lg-2 q-px-md" size="sm" color="primary" @click="addNovoEstagiario">+ Novo Usuário</q-btn>
          <q-input class="col-xs-12 col-sm-8 col-md-8 col-lg-8 q-px-md" dense filled label="Pesquisar ...">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn size="sm" class="col-xs-12 col-sm-2 col-md-2 col-lg-2 q-px-md" color="primary">Pesquisar</q-btn>
        </q-form>
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
    <q-card-section class="col" v-if="novoEstagiario">
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
      <div class="row flex flex-center">
        <q-btn class="q-my-md col-xs-10 col-sm-10 col-md-10 col-lg-10" color="primary" @click="addNovoEstagiario">Adicionar</q-btn>
        <q-btn class="q-my-md col-xs-10 col-sm-10 col-md-10 col-lg-10" color="negative" @click="addNovoEstagiario">Cancelar</q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
#cabecalho {
  background-color: Gainsboro;
}
</style>
