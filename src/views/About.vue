<template>
  <div class="container-fluid">
    <div class="col-12 col-md-12 col-sm-12 col-lg-12">
      <div class="navbar navbar-nav d-flex justify-content-start">
         <ul class="nav">
          <li class="nav-item dropdown">
            <select class="form-select" v-model="category">
              <option value="all">All</option>
              <option v-for="category in categories" :key="category.id" valeu="{{category.name}}">{{category.name}}</option>
            </select>
          </li>
          <li class="nav-item">
            <p class="nav-link">search</p>
          </li>
         </ul>
      </div>
    </div>
    <div class="container" v-for="task in filterTaskByCategory" :key="task.id">
      <div class="task">
        <ul>
          <li>{{task.name}}</li>
          <li>{{task.date}}</li>
          <li>{{task.category}}</li>
        </ul>
      </div>
    </div>

    <div class="create d-flex justify-content-center">
      <a href="#/createtask"><button class="btn">create Task</button></a>
    </div>

    
  </div>
</template>
<script>
import '@/assets/css/about.css'
export default {
  data() {
    return {
      category:'all'
    }
  },
  props:['categories','tasks'],
  computed: {
            filterTaskByCategory: function(){
              if(this.category=="all"){
                return this.tasks
              }else{
                return this.tasks.filter(tasks => !tasks.category.indexOf(this.category))
              }
                
            }
  
  }
}
</script>
<style lang="css" scoped>
  
</style>