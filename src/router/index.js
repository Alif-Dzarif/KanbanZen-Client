import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import HomePage from '../views/HomePage.vue'
import AddProject from '../views/AddProject.vue'
import UserInfo from '../views/UserInfo.vue'
import JoinProject from '../views/JoinProject.vue'
import Board from '../views/Board.vue'
import AddTask from '../views/AddTask.vue'
import News from '../views/News.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/project-add',
      name: 'project-add',
      component: AddProject
    },
    {
      path: '/project-join',
      name: 'project-join',
      component: JoinProject
    },
    {
      path: '/user-data',
      name: 'user-data',
      component: UserInfo
    },
    {
      path: '/task',
      name: 'task',
      component: Board
    },
    {
      path: '/add-task',
      name: 'add-task',
      component: AddTask
    },
    {
      path: '/articles',
      name: 'articles',
      component: News
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && localStorage.project_token) next('/')
  else if (to.name === 'home' && !localStorage.project_token ) next('/login')
  else next()
})

export default router
