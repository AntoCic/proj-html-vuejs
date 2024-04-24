<template>
    <section class="videos w-100 position-relative">
        <img src="/src/assets/img/h1-img-04.jpg" class="w-100">
        <div class="btn-container">
            <div class="ms_btn-video pourple">
                <img src="/src/assets/img/svg/svg-5.svg">
            </div>
            <div class="ms_btn-video">
                <img src="/src/assets/img/svg/svg-7.svg">
            </div>
        </div>

        <div class="position-absolute top-50 start-50 translate-middle">
            <i class="bi bi-play-fill fs-1 text-white" role="button"></i>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

.btn-container {
    position: absolute;
    top: -20px;
    right: 0;
}

.ms_btn-video {
    width: 40px;
    aspect-ratio: 1/1;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    cursor: pointer;

    &.pourple {
        background-color: $purple;
    }

    &:hover {
        background-color: $gray;
    }

}
</style>