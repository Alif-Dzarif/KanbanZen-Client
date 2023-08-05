<template>
  <div class="box-content h-25 w-250 p-4 border-4 bg-lime-400 border-none rounded-md shadow-xl mx-5 mt-3">
    <div class="text-black font-bold">
      <h1>Today Quote's: </h1>
      <div class="flex justify-center">
        <h1> "{{ quotes.content }}" </h1>
        <br>
        <h2> - {{ quotes.author }}</h2>
      </div>
    </div>
  </div>
  <div class="m-10 flex justify-center">
    <div class="grid grid-cols-5 gap-6 cursor-pointer">
      <div class="box-content h-25 w-40 p-4 border-4 bg-gray-800 border-none rounded-md shadow-xl mx-5 shadow-xl hover:shadow-none hover:bg-gray-700" >
        <div @click.prevent="newProject" class="flex justify-center mt-2">
          <img src="../components/icons/add.png" class="w-16 h-16 cursor-pointer">
        </div>
      </div>
      <boxContent v-for="(item, index) in projects" :key="index" :item="item"/>
    </div>
  </div>
</template>
<script>
import boxContent from '../components/boxContent.vue';
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter'
import Swal from 'sweetalert2'

export default {
  name: 'HomePage',
  components: {
    boxContent
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchProject']),
    ...mapActions(useCounterStore, ['newProject']),
    ...mapActions(useCounterStore, ['userInfo']),
    ...mapActions(useCounterStore, ['random']),
    newProject(){
      Swal.fire({
          title: 'which option you gonna do ?',
          showDenyButton: true,
          confirmButtonText: 'Add New Project',
          denyButtonText: 'Join Existing Project',
          background: 'gray',
          color: 'white'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push('/project-add')
          } else if (result.isDenied) {
            this.$router.push('/project-join')
          }
        })
    }
  },
  computed: {
    ...mapState(useCounterStore, ['projects']),
    ...mapState(useCounterStore, ['quotes']),
  },
  created() {
    this.fetchProject()
    this.userInfo()
    this.random()
  }
}
</script>