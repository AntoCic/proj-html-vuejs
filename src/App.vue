<template>
  <AppHeader />
  <AppMain />
  <AppFooter />

</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  components: { AppHeader, AppMain, AppFooter }
}
</script>

<style lang="scss">
@use './assets/scss/partials/_variables.scss' as *;
#app{
  background-color: $bg-light-gray;
}
</style>
