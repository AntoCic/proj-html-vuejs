<template>
  <button type="button">
    <span class="content">{{ content }}</span>
    <span class="arrow">&#10230;</span>
  </button>
</template>
<script>
export default {
  props: ['content'],
  methods: {

  },


}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

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

  &.btn-orange {
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