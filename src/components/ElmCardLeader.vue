<template>
  <div class="card-leader">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-auto">
          <h4>{{ titolo }}</h4>
        </div>
        <div class="col-auto">
          <p>{{ progress }}%</p>
        </div>
        <div class="col-12" v-html="elmBar()">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['titolo', 'progress'],
  methods: {
    elmBar() {
      return `<div class="ms_progress-bar" style="width: ${this.progress}%;"></div>`
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

.col-auto {
  font-size: 20px;
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-style: normal;
}
</style>