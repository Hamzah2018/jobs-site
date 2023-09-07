<template>
  <NavBar />
  <ImgCarousel />
  <TheSupporter />
  <TheMain />
  <ThePartener />
  <TheFooter/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ImgCarousel from './components/ImgCarousel.vue'
import TheSupporter from './components/TheSupporter.vue'
import TheMain from './components/TheMain.vue'
import ThePartener from './components/ThePartener.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ImgCarousel,
    TheSupporter,
    TheMain,
    ThePartener,
    TheFooter
  }
}
</script>

<style>

</style>
