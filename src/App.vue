<template>
  <div id="nav">
    <router-link to="/"></router-link>
  </div>
  <router-view :categories="categories" :tasks="tasks"/>
</template>

<style>

</style>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      categories:[],
      tasks:[],
    }
  },
   mounted() {
        this.getcategories();
        this.gettasks();
    },
    methods: {
        getcategories() {
            axios.get('http://localhost:3000/categories')
            .then(response => {
                this.formatcategories(response.data)
            })
        },
        formatcategories(categories) {
            for (let key in categories) {
                this.categories.push({ ...categories[key], id: key })
            }
            console.log(this.categories)
        },
        gettasks() {
            axios.get('http://localhost:3000/tasks')
            .then(response => {
                this.formattasks(response.data)
            })
        },
        formattasks(tasks) {
            for (let key in tasks) {
                this.tasks.push({ ...tasks[key], id: key })
            }
            console.log(this.tasks)
        }
    },
}
</script>
