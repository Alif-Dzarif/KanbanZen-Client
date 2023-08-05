<template>
  <div @click.prevent="open(item.ProjectId)" class="box-content h-25 w-40 p-4 border-4 bg-gray-800 border-none rounded-md shadow-xl mx-5 shadow-xl hover:shadow-none hover:bg-gray-700">
    <div class="flex justify-center text-center text-white">
      <h1>{{ item.Project.name }}</h1>
    </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: 'BoxContent',
  props: ['item'],
  methods: {
    ...mapActions(useCounterStore, ['openProject']),
    async open(value) {
      await this.openProject(value)
    }
  }
}
</script>