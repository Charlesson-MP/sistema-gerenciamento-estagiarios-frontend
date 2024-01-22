<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated style="height: 60px; background-color: rgb(11, 11, 83);">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-avatar>
            <img
              alt="logo-prefeitura"
              src="../assets/Brasão_Vitoria_da_Conquista.svg">
          </q-avatar>
          Estagi<span style="color: yellow;">Hub</span>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      elevated
      style="background-color: rgb(213, 213, 241);"
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer id="rodape">Desenvolvido por CTI</q-footer>
  </q-layout>
</template>

<style scooped>
#rodape {
  text-align: center;
  color:white;
  background-color: black;
}
</style>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    icon: 'speed',
    route: 'dashboards'
  },
  {
    title: 'Estagiários',
    icon: 'school',
    route: 'estagiarios'
  },
  {
    title: 'Usuários',
    icon: 'groups',
    route: 'usuarios'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
