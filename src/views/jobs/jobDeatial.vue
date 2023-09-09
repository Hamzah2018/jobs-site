<template>
  <h1>Job Details Page</h1>
  <!-- <p>The route Parmater {{id}}</p> -->
  <div v-if="job" class="job-detail">
    <h2>{{job.title}} : <span class="des">{{job.details}} </span></h2>
  </div>
  <div v-else class="Loading">
    loading ....
  </div>


</template>

<script>
export default {
  props: ['id'],
  data(){
    return{
      job: null
    }
  },
  mounted(){
    fetch('http://localhost:3000/jobs/' + this.id)
  .then(res =>res.json())
  .then(data => this.job = data)
  .catch(err => console.log(err.message))
  }
    // data(){
    //   return{
    //     id: this.$route.params.id,
    //   }
    // }
}
</script>

<style>
.job-detail .des{
  color: blue;
}
.job-detail h2{
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
</style>