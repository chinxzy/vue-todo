<template>
 <div class="container-fluid">
   <div class="head">
    <h1>Manage everything <br> you need to do<br>with 2do</h1>
   </div>

   <div class="svg">
     <img src="../assets/SVG/task.svg" alt="" class="img-fluid">
   </div>

   <div class="second">
     <p>when you are overwhlemed by the amount of work you have on your plate, stop and rethink!</p>
   </div>
 </div>

 <div class="button d-flex justify-content-center">
   <a href="/#/about"><button class="btn">Lets get started</button></a>
 </div>
 
</template>
<style lang="css" scoped>
  .head{
  text-align: center;
  margin-top: 2em
}
.svg>.img-fluid{
  
}
.second{
  margin-top: 1.5em;
  margin-bottom: 9em
}
a>.btn{
  background-color: #eac002 !important;
  color: #fff;
  font-weight: 540;

}
</style>
<script>
// @ is an alias to /src


export default {
  name: 'Home',
  
}
</script>
