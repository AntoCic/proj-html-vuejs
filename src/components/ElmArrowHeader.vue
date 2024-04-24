<template>
  <div>&#10230;</div>
</template>

<style lang="scss" scoped>
div {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  transition: width 0.3s;
  overflow: hidden;
  line-height: 1em;
  padding-bottom: 4px;

  &.active {
    width: 1.2em;
  }
}
</style>