<template>
  <section>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
          KanbanZen  
      </a>
      <div class="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                  Create your account
              </h1>
              <form @submit.prevent="registerForm" class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-white dark:text-white">Username</label>
                      <input v-model="username" type="username" name="username" id="username" class="bg-gray-500 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
                      <input v-model="email" type="email" name="email" id="email" class="bg-gray-500 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                      <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-500 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have account ? <a @click.prevent="registerUser" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</a>
                  </p>
              </form>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter'

export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },

  methods: {
    ...mapActions(useCounterStore, ['register']),

    async registerForm() {
      try {
        const value = {
          username: this.username,
          email: this.email,
          password: this.password
        }

        this.register(value)
      } catch (err) {
        console.log(err);
      }
    },

    async registerUser() {
      try {
        this.$router.push('/login')
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>