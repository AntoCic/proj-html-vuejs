<template>
    <section class="contact w-100 p-sct">
        <div class="ms_container-md">
            <div class="container">
                <div class="row">
                    <div class="col position-relative">
                        <img src="../assets/img/h1-contact-rev-01.png" alt="word-maps">
                        <div class="pos-new-york">
                            <img src="../assets/img/h1-contact-rev-02.png">
                            <div class="info-pos">
                                <p>New York Coaching</p>
                                <a href="#" class="read-more"></a>
                            </div>
                        </div>
                        <div class="pos-london">
                            <img src="../assets/img/h1-contact-rev-02.png">
                            <div class="info-pos">
                                <p>London Coaching</p>
                                <a href="#" class="read-more"></a>
                            </div>
                        </div>
                        <div class="pos-melbourne">
                            <img src="../assets/img/h1-contact-rev-02.png">
                            <div class="info-pos">
                                <p>Melbourne Coaching</p>
                                <a href="#" class="read-more"></a>
                            </div>
                        </div>

                    </div>
                    <div class="col">
                        <h2 class="sct-title">Contact us</h2>
                        <div class="sct-sub-title sct-sub-line"></div>
                        <div class="container">
                            <div class="row mt-5">
                                <div class="col-6 ps-0">
                                    <input type="text" class="form-control" placeholder="Your Name">
                                </div>
                                <div class="col-6">
                                    <input type="email" class="form-control" placeholder="Your Email">
                                </div>
                                <div class="col-12 ps-0 mt-4">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        placeholder="Write a message"></textarea>
                                </div>
                                <div class="col-12 ps-0 mt-4">
                                    <ElmBtn1 :content="'SEND'" class="btn-orange" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between p-sct pb-0 logo">
                    <div class="col-auto">
                        <img src="/src/assets/img/h4-clients-img-03.png" alt="">
                        <img src="/src/assets/img/h4-clients-img-04-1.png" alt="">
                    </div>
                    <div class="col-auto">
                        <img src="../assets/img/h4-clients-img-05.png" alt="">
                        <img src="/src/assets/img/h4-clients-img-06-1.png" alt="">
                    </div>
                    <div class="col-auto">
                        <img src="../assets/img/h4-clients-img-07.png" alt="">
                        <img src="/src/assets/img/h4-clients-img-08-1.png" alt="">
                    </div>
                    <div class="col-auto">
                        <img src="../assets/img/h4-clients-img-09.png" alt="">
                        <img src="/src/assets/img/h4-clients-img-10-1.png" alt="">
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

.pos-london {
    position: absolute;
    top: 17%;
    left: 51%;
}

.pos-melbourne {
    position: absolute;
    top: 56%;
    left: 80%;
}

.form-control {
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid $gray;
    background-color: transparent;
}

.logo {
    user-select: none;

    .col-auto {
        position: relative;

        img {
            opacity: 1;

            transition: opacity 0.3s;
        }

        img:last-child {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 12px;
            opacity: 0;
        }

        &:hover {
            img {
                opacity: 0;
            }

            img:last-child {
                opacity: 1;
            }
        }
    }
}

[class^="pos-"]:hover .info-pos {
    display: block;
}

.info-pos {
    background-color: #fff;
    margin-top: 6px;
    margin-left: -12px;
    padding: 20px;
    display: none;

    p {
        font-family: "Libre Baskerville", serif;
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
        margin-bottom: 6px;
    }
}
</style>