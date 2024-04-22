<template>
  <main>
    <h2>Header</h2>
    <a v-for="link in links" href="#" class="me-2">{{ link }}</a>
  </main>
</template>

<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
  },
  computed: {
    links() {
      return this.store.page
    }
  },
  mounted() {
  }


}

</script>

<style lang="scss" scoped></style>