<template>
    <main class="container-fluid d-lg-inline-flex justify-content-lg-between">
        <!-- <aside class="col-lg-5   col-md-8  col-sm-12 " > -->
            <section class="row">
            <MainCard />
        </section>
        <!-- advertace -->
        <MainAds />
      <!-- </section>      -->
      </main>  
</template>


<script>
 import MainCard from './MainCard.vue';
 import MainAds from './MainAds.vue';
export default {
   components:{
    MainCard,
    MainAds
   }

}
</script>

<style>

</style>