<template>
    <section class="testimonial w-100 ms_bg-black text-white text-center">
        <div class="ms_container-lg p-sct position-relative overflow-hidden">
            <p class="bg-text">Testimonials.</p>
            <div class="user position-relative">
                <div class="user-img">
                    <img src="../assets/img/h3-img-04.png">
                </div>
                <div class="user-content">
                    <h4 class="user-name my-3">Cynthia Clark</h4>
                    <p class="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat
                        animi odit minus porro suscipit inventore minima praesentium recusandae non.</p>
                </div>

            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

.bg-text {
    font-size: 12vw;
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    position: absolute;
    top: -65px;
    right: 0;
    left: 0;
    color: black;
}

.user {
    max-width: 700px;
    margin: 0 auto;

    .user-img {
        width: 114px;
        display: inline-block;
        position: relative;

        img {
            width: 100%;
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 5px solid white;
            border-radius: 50%;
        }
    }



}
</style>