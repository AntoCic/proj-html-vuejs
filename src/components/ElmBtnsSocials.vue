<template>
  <ul>
    <li v-for="fileName in icoList" :key="fileName">
      <img :src="imgSocialPath(fileName)" alt="fileName">
    </li>
  </ul>
</template>
<script>
export default {
  props: ['icoList'],
  methods: {
    imgSocialPath(fileName) {
      return `/src/assets/img/social/${fileName}`
    }
  },


}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

ul {
  padding: 0;
  margin-bottom: 0;
  display: inline-block;

  &.orange li {
    background-color: $orange;

    img {
      filter: invert(100%);
    }

    &:hover {
      background-color: #000;
    }
  }

  li {
    display: inline-block;
    margin-right: 8px;
    background-color: white;
    border-radius: 50%;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: $orange;

      img {
        filter: invert(100%);
      }
    }

    img {
      width: 24px;
      aspect-ratio: 1/1;

      padding: 4px;
    }
  }
}




button {
  border: 0;
  padding: 12px 0;
  background-color: #ffffff;

  .content {
    display: inline-block;
    padding: 10px 36px;
  }

  .arrow {
    padding-right: 12px;

    position: relative;
    right: 0px;
    transition: right 0.3s;

    &::before {
      content: "";
      display: inline-block;
      height: 30px;
      width: 1px;
      background-color: currentColor;
      vertical-align: middle;
      margin-right: 12px;
    }
  }

  &.orange {
    background-color: $orange;
    color: white;
  }

  &:hover {
    .arrow {
      right: 36px;

      &::before {
        background-color: transparent;
      }
    }

  }
}
</style>