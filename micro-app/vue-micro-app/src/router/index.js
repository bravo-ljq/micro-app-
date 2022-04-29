const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import('../views/HomeView.vue')
  }
]

export default routes
