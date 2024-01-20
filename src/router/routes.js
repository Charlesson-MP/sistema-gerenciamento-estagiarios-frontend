const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/login', name: 'login', component: () => import('pages/LoginPage.vue') }
    ]
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboards', name: 'dashboards', component: () => import('pages/IndexPage.vue') },
      { path: '/estagiarios', name: 'estagiarios', component: () => import('pages/EstagiariosPage.vue') },
      { path: '/usuarios', name: 'usuarios', component: () => import('pages/UsuariosPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
