<template>
    <header class="header w-100">
      <div class="ms_container-lg">
        <div class="d-flex justify-content-between align-items-center">
          <h1 class="sct-title mb-0">Everland</h1>
          <div>
            <template v-for="link in links">
              <elm-arrow :class="{ 'active': link === currentPage }" class="me-2" />
              <a href="#" class="me-2" :class="{ 'active': link === currentPage }">{{ link.toUpperCase() }}</a>
            </template>
            <a href="#" class="me-2"><i class="bi bi-search"></i></a>
            <a href="#" class="me-2"><i class="bi bi-list-ul"></i></a>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
import { store } from '../store.js';

import ElmArrow from './ElmArrow.vue'

export default {
  components: { ElmArrow },
  data() {
    return {
      store,
    }
  },
  methods: {
  },
  computed: {
    links() {
      return this.store.pages
    },
    currentPage() {
      return this.store.currentPage
    }
  },
  mounted() {
  }


}

</script>


<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

.header {
  margin: 40px 0;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
}

.active {
  color: $orange;
}
</style>