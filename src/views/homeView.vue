<template>
    <ImgCarousel />
  <TheSupporter />
  <TheMain />
  <ThePartener />
</template>

<script>

import ImgCarousel from '../components/HomePage/ImgCarousel.vue'
import TheSupporter from '../components/HomePage/TheSupporter.vue'
import TheMain from '../components/HomePage/TheMain.vue'
import ThePartener from '../components/HomePage/ThePartener.vue'

export default {
name: 'HomeView',
components: {
    ImgCarousel,
    TheSupporter,
    TheMain,
    ThePartener,
}

}
</script>

<style>

</style>