<template>
<nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
  <div @click.prevent="goHome" class="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
    <img @click.prevent="goHome" src="/favicon.ico" class="w-15 h-12 mr-2" alt="">
    <span class="font-semibold text-xl tracking-tight hover:text-teal-400">KanbanZen</span>
  </div>
  <div v-if="login_status || get_project_access || get_task_access" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a @click.prevent="articlesShow" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400 mr-4 cursor-pointer">
        Article
      </a>
      <a v-if="!users.premium" @click.prevent="upgrade" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400 mr-4 cursor-pointer">
        Upgrade
      </a>
    </div>
    <div v-if="login_status || get_project_access || get_task_access" class="flex mx-3 cursor-pointer" @click.prevent="userDetail">
      <h2 class="text-white mr-3 mt-1  hover:text-teal-400">Hi, {{ users.username }}</h2>
      <img src="../components/icons/user(1).png">
    </div>
  </div>
</nav>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'NavBar',
  methods: {
    ...mapActions(useCounterStore, ['userInfo']),
    ...mapActions(useCounterStore, ['subscribe']),
    async article() {
      this.$router.push('/articles-NYT')
    },

    async goHome() {
      this.$router.push('/')
    },

    async userDetail() {
      this.$router.push('/user-data')
    },

    async articlesShow() {
      this.$router.push('/articles')
    },

    async upgrade() {
      this.subscribe()
    }
  },
  computed: {
    ...mapState(useCounterStore, ['users']),
    ...mapState(useCounterStore, ['login_status']),
    ...mapState(useCounterStore, ['get_project_access']),
    ...mapState(useCounterStore, ['get_task_access']),
  },
  created() {
    this.userInfo()
  }

}
</script>