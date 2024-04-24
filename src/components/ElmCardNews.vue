<template>
  <div class="card-news">
    <div class="card-img position-relative">
      <div class="badge-img text-gray fw-lighter"><i class="bi bi-tag"></i> Business, Leading</div>
      <img :src="`/src/assets/img/${imgT}`">
      <img :src="`/src/assets/img/${imgB}`">
    </div>
    <div class="card-content mt-4">
      <p class="img-ref text-gray my-2"><i class="bi bi-clock"></i> {{ data }} <i class="bi bi-person"></i>{{ author }}
      </p>
      <h2 class="sct-title no-dot fs-3">{{ title }}</h2>
      <p class="sct-sub-title">{{ content }}</p>
      <a href="#" class="read-more"></a>
    </div>
  </div>

</template>

<script>
export default {
  props: ['img-t', 'img-b', 'data', 'author', 'title', 'content'],
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

.card-img {
  img {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
    object-position: bottom;

    &:last-child {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 60%;
      width: 100%;
    }
  }

  .badge-img {
    position: absolute;
    bottom: -10px;
    right: 20px;
    background-color: $orange;
    color: #fff;
    padding: 10px 20px;
    z-index: 1;

  }
}
.card-content {
    i {
      color: $orange;
    }
  }
</style>