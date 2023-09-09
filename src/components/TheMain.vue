<template>
    <main class="container-fluid d-lg-inline-flex justify-content-lg-between">
        <section class="row" >
            <div v-for="job in jobs" :key="job.id" class="card col-12 col-lg-4  m-4  bg-light link-secondary">
                <MainCard :job="job" />
                </div>
        </section>
        <MainAds />
  </main>  
</template>
<script>
import MainCard from './MainCard.vue';
import MainAds from './MainAds.vue';
export default {
    props:['job'],
    data(){
        return{
            jobs:[
                {title: 'Systems Engineer, Microsoft Services',body:'Our Culture: At STS we are proud of our culture and how it drives everything.',isOffer: true}, 
                {title: 'Systems Engineer, Microsoft Services',body:'Our Culture: At STS we are proud of our culture and how it drives everything.',isOffer: true}, 
                {title: 'Systems Engineer, Microsoft Services',body:'Our Culture: At STS we are proud of our culture and how it drives everything.',isOffer: true}, 
                {title: 'Systems Engineer, Microsoft Services',body:'Our Culture: At STS we are proud of our culture and how it drives everything.',isOffer: true}, 
            ]
        }},
components:{
    MainCard,
    MainAds
}

}
</script>

<style>

</style>