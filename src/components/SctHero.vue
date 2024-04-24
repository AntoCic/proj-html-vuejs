<template>
    <section class="hero w-100 position-relative">
        <img :src="imgSrc('rev-slider-main-home-img-03.jpg')">
        <div class="ms_container-lg position-relative">
            <ElmArrow class="arr-left position-absolute top-50 start-0 translate-middle-y"/>
            <ElmArrow class="arr-right position-absolute top-50 end-0 translate-middle-y"/>
            <div class="ms_container-md">
                <div class="col-6 libre-baskerville-bold">
                    <h2 class="sct-title">Our Team</h2>
                    <p class="sct-sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam optio velit
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
import ElmArrow from './ElmArrow.vue';
export default {
    components: { ElmBtn1,ElmArrow },
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

    .sct-title {
        font-size: 96px;
        margin-bottom: 40px;
        line-height: 0.9em;
    }

    .sct-sub-title {
        margin-bottom: 44px;
    }
}
</style>