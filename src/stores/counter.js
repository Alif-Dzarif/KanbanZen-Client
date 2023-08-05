import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'https://kanban-server.alifdzarif.xyz/'
import Swal from 'sweetalert2'


export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    login_status: false,
    projects: [],
    users: {},
    quotes: {},
    get_project_access: localStorage.project_token,
    get_task_access: localStorage.task_access,
    task: [],
    getArticles: []
  }),
  getters: {

  },
  actions: {
    async login(value) {
      try {
        const { data } = await axios({
          url: baseUrl + 'user-login',
          method: 'post',
          data: {
            email: value.email,
            password: value.password
          }
        })

        localStorage.project_token = data.project_token
        this.$patch({ login_status: true })
        this.$router.push('/')
      } catch (err) {
        console.log(err);
      }
    },

    async register(value) {
      try {
        await axios({ 
          url: baseUrl + 'user-register',
          method: 'post',
          data: {
            username: value.username,
            email: value.email,
            password: value.password
          }
        })

        this.$router.push('/login')
      } catch (err) {
        console.log(err);
      }
    },

    async logout() {
      try {
        await this.$patch({ login_status: false })
        await this.$patch({ users: {} })
        localStorage.clear()
        this.$router.push('/login')
      } catch(err) {
        console.log(err);
      }
    },

    async fetchProject() {
      try {
        const { data } = await axios({ 
          url: baseUrl + 'project-show',
          method: 'get',
          headers: {
            project_token: localStorage.project_token
          } 
        })
  
        this.projects = data  
      } catch (err) {
        console.log(err);
      }
    },

    async userInfo() {
      try {
        const { data } = await axios({
          url: baseUrl + 'user-info',
          method: 'get',
          headers: {
            project_token: localStorage.project_token
          }
        })
        
        this.users = data
      } catch (err) {
        console.log(err);        
      }
    },

    async addProject(value) {
      try {
        await axios({
          url: baseUrl + 'project-add',
          method: 'post',
          headers: {
            project_token: localStorage.project_token
          },
          data: {
            name: value.name,
            email: value.email,
            password: value.password
          }
        })

        this.fetchProject()
        this.$router.push('/')
      } catch (err) {
        console.log(err);
      }
    },

    async joinProject(value) {
      try {
        await axios({
          url: baseUrl + 'project-join',
          method: 'post',
          headers: {
            project_token: localStorage.project_token
          },
          data: {
            name: value.name,
            email: value.email,
            password: value.password
          }
        })

        this.fetchProject()
        this.$router.push('/')
      } catch (err) {
        console.log(err);
      }
    },

    async random() {
      try {
        const { data } = await axios({
          url: baseUrl + 'quotes',
          method: 'get',
          headers: {
            project_token: localStorage.project_token
          }
        })

        this.quotes = data
      } catch (err) {
        console.log(err);
      }
    },


    async updateTier() {
      try {
        await axios({
          url: baseUrl + 'premium-access',
          method: 'patch',
          headers: {
            project_token: localStorage.project_token
          }
        }) 

        this.userInfo()
      } catch (err) {
        console.log(err);
      }
    },

    async subscribe() {
      try {
        const { data } = await axios({
          url: baseUrl + 'generate-payment-token',
          method: 'post',
          headers: {
            project_token: localStorage.project_token
          }
        })

        const updated = this.updateTier;

        window.snap.pay(data.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            alert("payment success!"); console.log(result);
          },
        })

        updated()
      } catch (err) {
       console.log(err); 
      }
    },

    async openProject(value) {
      try {
        const { data } = await axios({
          url: baseUrl + 'project-open/' + value,
          method: 'get',
          headers: {
            project_token: localStorage.project_token
          }
        })
       
        localStorage.task_token = data.task_token
        this.$router.push('/task')
      } catch (err) {
        console.log(err);  
      }
    },

    async fetchTask() {
      try {
        const { data } = await axios({
          url: baseUrl + 'task',
          method: 'get',
          headers: {
            project_token: localStorage.project_token,
            task_token: localStorage.task_token
          }
        })

        this.task = data
      } catch (err) {
        console.log(err);
      }
    },

    async addTask(value) {
      try {
        await axios({
          url: baseUrl + 'task',
          method: 'post',
          headers: {
            project_token: localStorage.project_token,
            task_token: localStorage.task_token
          },
          data: {
            title: value.title,
            description: value.description,
            target: value.target
          }
        })
        this.fetchTask()
        this.$router.push('/task')
      } catch (err) {
        console.log(err);
      }
    },

    async articles() {
      try {
        const { data } = await axios({
          url: baseUrl + 'articles',
          method: 'get',
          headers: {
            project_token: localStorage.project_token,
          }
        })
        const get = data.results
        this.getArticle = get
        console.log(get);
      } catch (err) {
        console.log(err);
      }
    }
  }
})
