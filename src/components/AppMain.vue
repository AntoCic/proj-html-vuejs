<template>
    <main>
        <section class="hero">
            <img src="../assets/img/rev-slider-main-home-img-03.jpg" alt="">

        </section>

        <section class="specialities w-100 mt--1">
            <div class="ms_container-lg bg-white">
                <div class="col text-center">
                    <h2 class="mb-0">Our specialities<span class="text-orange">.</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, perferendis.</p>
                    <p><span class="text-orange">__________</span></p>
                    <div class="d-flex justify-content-around ">
                        <div class="specialities-card">
                            <img src="../assets/img/svg/svg-0.svg" alt="">
                            <h3>Knowing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                        <div class="specialities-card">
                            <img src="../assets/img/svg/svg-0.svg" alt="">
                            <h3>Knowing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                        <div class="specialities-card">
                            <img src="../assets/img/svg/svg-0.svg" alt="">
                            <h3>Knowing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                        <div class="specialities-card">
                            <img src="../assets/img/svg/svg-0.svg" alt="">
                            <h3>Knowing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                </div>

            </div>


        </section>
        <section class="social">
            <div class="container">
                <div class="row text-center">
                    <div class="col-8">
                        <img src="../assets/img/h1-img-01.jpg" alt="">
                    </div>
                    <div class="col-8">
                        <h3>lorem Lorems</h3>
                    </div>
                </div>
            </div>

        </section>

    </main>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    methods: {
        imgSrc(nameFile) {
            return '/src/assets/img/' + nameFile
        }
    },
    computed: {
    },
    mounted() {
    }
}

</script>

<style lang="scss" scoped>
.mt--1 {
    margin-top: -75px;
}

.specialities {
    .ms_container-lg {
        padding: 130px 0;
    }

}
</style>