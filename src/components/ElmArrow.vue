<template>
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" :fill="color">
      <path
        d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
    </svg>
  </span>

</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#000'
    }
  }
}
</script>


<style lang="scss" scoped>
span {

  &.arr-left {
    svg{transform: rotate(180deg);}
  }
  &.arr-right {
    svg{transform: rotate(0);}
  }
  &.arr-up {
    svg{transform: rotate(270deg);}
  }
  &.arr-down {
    transform: rotate(90deg);
  }
  svg {
    cursor: pointer;
    &:hover {
      filter: invert(70%) grayscale(100%);
    }
  }
}
</style>