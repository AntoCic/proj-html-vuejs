<template>
    <section class="news w-100 p-sct">
        <div class="ms_container-md text-center">

            <h2 class="sct-title">Latest news</h2>
            <p class="sct-sub-title sct-sub-line-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                perferendis.</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="ms_card p-2">
                        <div class="card-img position-relative">
                            <img src="../assets/img/h1-blog-img-02.jpg" alt="">
                            <img src="../assets/img/h1-blog-img-03.jpg" alt="">
                        </div>
                        <div class="card-content mt-3">
                            <p class="img-ref text-gray my-2">May 5,2019 Amanda Doe</p>
                            <h2 class="sct-title no-dot fs-3">Next investment</h2>
                            <p class="sct-sub-title">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Hic,
                                perferendis.</p>
                            <p>READ MORE</p>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
                <div class="col"></div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.card-img {
    img:last-child {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 60%;
        width: 100%;
        object-fit: cover;
        object-position: bottom;
    }
}
</style>