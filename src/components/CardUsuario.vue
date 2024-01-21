<script setup>
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
      <q-card-section>
        <div class="row">
          <q-btn class="col-2 q-mr-xl" color="primary">+ Novo Usuário</q-btn>
          <q-input class="col-6 q-ml-xl" filled label="Pesquisar ...">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </q-card-section>
      <q-card-section>
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
    </q-card>
</template>

<style scoped>
#cabecalho {
  background-color: Gainsboro;
}
</style>
