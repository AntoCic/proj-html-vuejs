<template>
    <section class="founder  w-100 p-sct ">
        <div class="ms_container-md position-relative">
            <img src="/src/assets/img/h1-img-01.jpg">
            <div class="arr-img">
                <ElmArrow class="arr-left" color="#fff" />
                <ElmArrow class="arr-right" color="#fff" />
            </div>

            <div class="box">
                <h2 class="sct-title no-dot">Jason Bickford</h2>
                <p class="sct-sub-title sct-sub-line">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                    perferendis.</p>
                <p class="text-gray fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores
                    commodi voluptatem omnis voluptate itaque veritatis temporibus quis modi velit!</p>
                <div class="d-flex justify-content-between align-items-center">
                    <ElmBtnsSocials :icoList="['linkedin.svg', 'facebook.svg', 'twitter.svg']" class="orange" />
                    <svg class="signature" version="1.0" xmlns="http://www.w3.org/2000/svg" width="200.000000pt"
                        height="29.000000pt" viewBox="0 0 86.000000 29.000000" preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,29.000000) scale(0.100000,-0.100000)" fill="#FF4612"
                            stroke="none">
                            <path d="M113 265 c-47 -20 -41 -26 7 -8 50 20 70 7 70 -48 0 -34 -4 -40 -35
-55 -49 -23 -107 -92 -103 -123 2 -13 8 -26 14 -28 17 -6 72 44 101 90 33 53
43 145 18 170 -20 20 -30 21 -72 2z m67 -123 c0 -30 -87 -132 -112 -132 -14 0
-8 32 12 66 27 42 100 91 100 66z" />
                            <path d="M554 270 c-12 -5 -26 -15 -30 -22 -6 -10 -5 -11 7 -1 33 26 139 28
123 1 -4 -6 -27 -19 -52 -30 -33 -15 -46 -17 -52 -8 -7 11 -40 -45 -40 -67 0
-5 -13 -10 -29 -10 -38 0 -81 -28 -81 -53 0 -22 31 -34 62 -25 17 6 20 4 14
-11 -5 -15 -2 -14 11 3 10 13 36 32 58 44 22 11 46 28 53 37 9 12 12 12 12 2
0 -9 6 -8 20 5 17 15 23 16 33 5 9 -10 9 -11 0 -6 -7 4 -13 2 -13 -4 0 -21 23
-4 27 19 2 12 -1 20 -5 17 -17 -11 -72 -16 -72 -7 0 5 -13 14 -30 20 -16 5
-30 12 -30 15 0 3 6 3 14 0 15 -6 102 32 113 49 17 28 -64 47 -113 27z m34
-113 c10 -8 9 -13 -3 -27 -21 -23 -131 -72 -152 -68 -44 8 -11 58 38 58 17 0
28 -4 24 -9 -3 -5 -2 -12 3 -15 4 -2 14 15 21 39 11 36 16 42 34 37 12 -3 28
-9 35 -15z" />
                            <path d="M774 207 c-15 -31 -38 -60 -51 -66 -14 -7 -23 -7 -23 -1 0 6 5 10 10
10 6 0 10 5 10 11 0 8 -5 8 -15 -1 -22 -18 -19 -43 5 -37 10 3 21 0 24 -7 3
-7 5 -7 5 2 1 8 9 10 24 7 16 -4 29 0 42 16 l20 22 -28 -18 c-36 -23 -50 -10
-17 16 15 11 18 17 8 13 -23 -8 -23 1 3 43 12 19 19 37 16 40 -3 3 -18 -20
-33 -50z" />
                            <path d="M685 190 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M230 180 c-14 -4 -19 -8 -11 -9 11 -1 10 -5 -5 -16 -18 -13 -18 -14
-1 -15 10 0 15 -4 12 -10 -9 -14 8 -13 23 2 25 25 23 -3 -2 -32 -14 -17 -26
-36 -26 -41 0 -15 26 -10 42 9 18 20 30 72 17 72 -18 0 -8 22 11 27 11 3 17 9
14 14 -6 11 -39 10 -74 -1z m35 -20 c-20 -23 -29 -21 -19 4 3 9 13 16 22 16
13 0 12 -3 -3 -20z m-9 -88 c-22 -23 -29 -10 -9 18 11 16 18 19 21 11 2 -7 -3
-20 -12 -29z" />
                            <path d="M473 173 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
                            <path d="M340 162 c-31 -5 -44 -17 -35 -32 5 -8 11 -6 22 7 8 10 16 14 19 7 6
-13 63 -9 77 5 7 7 7 11 1 11 -5 0 -15 -5 -22 -12 -8 -8 -12 -8 -12 -1 0 14
-19 20 -50 15z" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import ElmBtnsSocials from './ElmBtnsSocials.vue';
import ElmArrow from './ElmArrow.vue';
export default {
    components: { ElmBtnsSocials, ElmArrow },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

img {
    padding: 10px;
    width: 55%;
}

.box {
    background-color: white;
    width: calc(55% - 10px);
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 50px;
}

.signature {
    transform: scale(1.5);
}

.arr-img {
    background-color: $orange;
    position: absolute;
    padding: 20px;
    bottom: 10px;
    left: 22px;
}
</style>