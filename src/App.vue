<template>
  <NavBar />

  <TheFooter/>
</template>

<script>
import NavBar from './components/NavBar.vue'
// HomePage
import TheFooter from './components/TheFooter.vue'

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
