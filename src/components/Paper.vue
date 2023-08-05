<template>
  <div class="box-content h-32 w-80 my-4 p-4 border-4 bg-teal-400 border-none rounded-xl text-center">
      <h1 class="font-bold">{{ item.title }}</h1>
      <br>
      <h2>{{ item.description }}</h2>
      <p>To :</p>
      <h2>{{ item.target }}</h2>
      <select name="status" id="">
        <option class="bg-teal-400" v-for="(item, index) in ['done', 'progress', 'todo']" :key="index" :value="item">{{ item }}</option>
      </select>
  </div>
</template>
<script>
export default {
  name: 'Paper',
  props: ['item']
}
</script>