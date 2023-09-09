<template>
    <ImgCarousel />
  <TheSupporter />
  <TheMain />
  <ThePartener />
</template>

<script>

import ImgCarousel from '../components/ImgCarousel.vue'
import TheSupporter from '../components/TheSupporter.vue'
import TheMain from '../components/TheMain.vue'
import ThePartener from '../components/ThePartener.vue'

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