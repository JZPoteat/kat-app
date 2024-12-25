import { createRouter, createWebHashHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHashHistory(), // Change this to hash history
  routes
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

export default router
