<template>
    <main>
        <div class="hero">
            <img src="../assets/img/rev-slider-main-home-img-03.jpg" alt="">
        </div>
        <h2>Main</h2>
        
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
</style>