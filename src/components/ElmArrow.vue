<template>
  <div>&#10230;</div>
</template>

<style lang="scss" scoped>
div {
  display: inline-block;
  vertical-align: sub;
  width: 0;
  transition: width 0.3s;
  overflow: hidden;

  &.active {
    width: 1.2em;
  }
}
</style>