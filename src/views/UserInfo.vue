<template>
<section>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                  Your Current Info
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-white dark:text-white">Username</label>
                      <input type="username" name="username" id="username" class="bg-gray-500 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" :value="users.username" disabled>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
                      <input type="email" name="email" id="email" class="bg-gray-500 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" :value="users.email" disabled>
                  </div>
                  <div>
                      <label for="tier" class="block mb-2 text-sm font-medium text-white dark:text-white">Tier</label>
                      <input type="text" name="password" id="password" placeholder="••••••••" class="bg-gray-500 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" :value="users.premium? 'Premium': 'Free'" disabled>
                  </div>
                  <button @click.prevent="userLogout" type="button" class="w-full text-white bg-red-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-900">Log Out</button>
              </form>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/counter';

export default {
  name: "UserInfo",
  methods: {
    ...mapActions(useCounterStore, ['userInfo']),
    ...mapActions(useCounterStore, ['logout']),
    async userLogout() {
      await this.logout()
    }
  },

  computed: {
    ...mapState(useCounterStore, ['users'])
  },
  created() {
    this.userInfo()
  }
}
</script>