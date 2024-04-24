<template>
  <div class="list-items">
    <div class="lc-data">
      <p class="mb-0 fw-bolder">{{ eventObj.day }}</p>
      <p class="mb-0 fw-lighter">{{ eventObj.data }}</p>
    </div>
    <div class="lc-contents">
      <h3 class="lc-title">{{ eventObj.title }}</h3>
      <p class="lc-info"><i class="bi bi-clock"></i>{{ eventObj.dataTime }}</p>
      <p class="lc-info"><i class="bi bi-geo-alt"></i>{{ eventObj.location }}</p>

      <a href="#" class="read-more"></a>
    </div>

  </div>
</template>

<script>
export default {
  props: ['eventObj'],
  methods: {
    imgSocialPath(fileName) {
      return `/src/assets/img/social/${fileName}`
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

.list-items {
  display: flex;
  padding: 30px 44px;
  border-top: 2px solid #EDEDED;

  &:nth-child(2) {
    background-color: #fff;
  }


  .lc-data {
    width: 70px;
    height: 55px;
    background-color: $orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 10px 10px;
    font-size: 12px;

    p:first-child {
      font-size: 18px;
    }
  }

  .lc-contents {
    width: 80%;
    padding: 0 20px;
    font-family: "Libre Baskerville", serif;
    font-weight: 400;
    font-style: normal;

    .lc-title {
      font-size: 20px;
      font-weight: 700;

      &:hover {
        color: $orange;
      }
    }

    .lc-info {
      color: $gray;

      i {
        margin-right: 12px;
        vertical-align: text-bottom;
        color: $orange;
      }
    }
  }

}
</style>