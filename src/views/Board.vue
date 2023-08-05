<template> 
<div class="flex my-4 mx-7 justify-end">
  <button @click.prevent="add" type="button" class="bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New Task</button>
</div>
<div class="m-6">
  <div class="flex justify-around">
    <div class="box-content">
      <div class="grid box-content h-500 w-800 p-4 border-4 justify-items-center bg-gray-700 border-none rounded-lg">
        <h1 class="w-80 text-center mb-5 text-white text-lg font-semibold ">Todo</h1>
        <div v-for="(item, index) in task" :key="index">
          <Paper v-if="item.status === 'todo'" :item="item"/>
        </div>
      </div>
    </div>
    <div class="box-content">
      <div class="grid box-content h-500 w-800 p-4 border-4 justify-items-center bg-gray-700 border-none rounded-lg">
        <h1 class="w-80 text-center mb-5 text-white text-lg font-semibold">Progress</h1>
        <div v-for="(item, index) in task" :key="index">
          <Paper v-if="item.status === 'progress'" :item="item"/>
        </div> 
      </div>
    </div>
    <div class="box-content">
      <div class="grid box-content h-500 w-800 p-4 border-4 justify-items-center bg-gray-700 border-none rounded-lg">
        <h1 class="w-80 text-center mb-5 text-white text-lg font-semibold">Done</h1>
        <div v-for="(item, index) in task" :key="index">
          <Paper v-if="item.status === 'done'" :item="item"/>
        </div>
      </div>
    </div>
  </div>
</div> 
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter'

import Paper from '../components/Paper.vue';

export default {
  name: 'Board',
  components: {
    Paper
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchTask']),
    async add() {
      this.$router.push('/add-task')
    }
  },
  computed: {
    ...mapState(useCounterStore, ['task'])
  },
  created() {
    this.fetchTask()
  }
}
</script>