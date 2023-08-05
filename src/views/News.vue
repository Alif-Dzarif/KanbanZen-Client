<template>
  <Card v-for="(item, index) in getArticles" :key="index" :item="item"/>
</template>
<script>
import Card from '../components/Card.vue';
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: 'News',
  components: {
    Card
  },
  methods: {
    ...mapActions(useCounterStore, ['articles'])
  },
  computed: {
    ...mapState(useCounterStore, ['getArticles'])
  },
  created() {
    this.articles()
  }
}
</script>