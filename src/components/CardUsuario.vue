<script setup>
const columns = [
  {
    nome: 'nome',
    label: 'Nome',
    align: 'left',
    sortable: true
  },
  {
    nome: 'perfil',
    label: 'Perfil',
    align: 'left',
    sortable: true
  },
  {
    nome: 'status',
    label: 'Status',
    align: 'left',
    sortable: true
  },
  {
    nome: 'acoes',
    label: 'Ações',
    align: 'left',
    sortable: true
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
            :columns="columns"
            row-key="name"
            flat bordered
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
