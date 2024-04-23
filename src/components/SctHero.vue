<template>
    <section class="hero w-100 position-relative">
        <img :src="imgSrc('rev-slider-main-home-img-03.jpg')">
        <div class="ms_container-lg">
            <div class="ms_container-md">
                <div class="col-6 libre-baskerville-bold">
                    <h2 class="title">Our Team<span class="text-orange">.</span></h2>
                    <p class="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam optio velit
                        neque assumenda fuga minus.</p>
                        <ElmBtn1 :content="'READ MORE'" class="me-3"/>
                        <ElmBtn1 :content="'PURCHASE'" class="btn-orange"/>
                </div>

            </div>
        </div>
    </section>

</template>

<script>
import ElmBtn1 from './ElmBtn1.vue';
export default {
    components: { ElmBtn1 },
    methods: {
        imgSrc(nameFile) {
            return '/src/assets/img/' + nameFile
        }
    }
}
</script>

<style lang="scss" scoped>
$space-header: 140px;

.hero {
    min-height: 600px;
}

img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

.ms_container-lg {
    position: relative;
    z-index: 1;
    padding-top: $space-header;
}

.ms_container-md {
    padding: 240px 0;

    .title {
        font-size: 96px;
        margin-bottom: 40px;
        line-height: 0.9em;
    }

    .content {
        font-size: 20px;
        color: #a6a6a6;
        margin-bottom: 44px;
    }
}
</style>