<template>
  <NavBar />

  <TheFooter/>
</template>

<script>
import NavBar from './components/Layout/NavBar.vue'
// HomePage
import TheFooter from './components/Layout/TheFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TheFooter
  }
}
</script>

<style>

</style>
