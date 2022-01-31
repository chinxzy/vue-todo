<template>
    <div class="container-fluid">
        <div class="col-12 col-md-12 col-sm-12 col-lg-12">
      <div class="navbar navbar-nav d-flex justify-content-start">
         <ul class="nav">
          <li class="nav-item">
            <p class="nav-link">New Task</p>
          </li>
         </ul>
      </div>
    </div>

      <div class="form">
        <form @submit.prevent="onCreatePost">
        <div class="mb-3 mt-3">
          <label for="task" class="form-label">what is to be done:</label>
          <input type="text" class="form-control" id="task" v-model="task" />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Due date:</label>
          <input type="date" class="form-control" id="date" v-model="date" />
        </div>
        <div class="mb-3 list">
          <label for="list" class="form-label">add List:</label>
          <select class="form-select" v-model="categoryInput">
            <option v-for="category in categories" :key="category.id">{{category.name}}</option>
          </select>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> 
      </div>

      <button type="button" class="btn btn-primary pop" data-bs-toggle="modal" data-bs-target="#myModal">
        Open modal
      </button>

      <!-- The Modal -->
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Add new Category</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <form @submit.prevent="onCreateCat">
                <div class="mb-3 mt-3">
                  <label for="cat" class="form-label">Category</label>
                  <input type="text" class="form-control" v-model="cat">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form> 
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import '@/assets/css/create.css'
export default {
  data() {
    return {
      task:'',
      date:'',
      categoryInput:'',
      category:[],
      cat:''


    }
  },
   
  methods: {
        onCreatePost(){
             axios.post(
                 'http://localhost:3000/tasks',
                { name: this.task, date: this.date, category: this.categoryInput},

            ).then(response => {
                this.isSuccess = true,
                console.log(response),
                this.$emit('postcreated')
            })
        },
        onCreateCat(){
             axios.post(
                 'http://localhost:3000/categories',
                { name: this.cat },

            ).then(response => {
                this.isSuccess = true,
                console.log(response),
                this.$emit('postcreated')
            })
        },
    },
    props:['categories']
}
</script>
<style>

</style>