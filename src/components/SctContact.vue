<template>
    <section class="contact w-100 p-sct">
        <div class="ms_container-md">
            <div class="container">
                <div class="row">
                    <div class="col position-relative">
                        <img src="../assets/img/h1-contact-rev-01.png" alt="word-maps">
                        <img src="../assets/img/h1-contact-rev-02.png" class="pos-new-york">
                    </div>
                    <div class="col">
                        <h2 class="sct-title">Contact us</h2>
                        <div class="sct-sub-title sct-sub-line"></div>
                        <div class="container">
                            <div class="row mt-5">
                                <div class="col-6">
                                    <input type="text" class="form-control" placeholder="Your Name">
                                </div>
                                <div class="col-6">
                                    <input type="email" class="form-control" placeholder="Your Email">
                                </div>
                                <div class="col-12 mt-4">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write a message"></textarea>
                                </div>
                                <div class="col-12 mt-4">
                                    <ElmBtn1 :content="'SEND'" class="btn-orange"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between p-sct pb-0">
                    <div class="col-auto">
                        <img src="../assets/img/h4-clients-img-03.png" alt="">
                    </div>
                    <div class="col-auto">
                        <img src="../assets/img/h4-clients-img-03.png" alt="">
                    </div>
                    <div class="col-auto">
                        <img src="../assets/img/h4-clients-img-03.png" alt="">
                    </div>
                    <div class="col-auto">
                        <img src="../assets/img/h4-clients-img-03.png" alt="">
                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

<script>
import ElmBtn1 from './ElmBtn1.vue';
export default {
    components: { ElmBtn1 }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;
.pos-new-york {
    position: absolute;
    top: 32%;
    left: 24.5%;
}

.form-control{
border: 0;
border-radius: 0;
border-bottom: 1px solid $gray;
background-color: transparent;
}
</style>