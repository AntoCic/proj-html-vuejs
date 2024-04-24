<template>
    <section class="news w-100 p-sct">

        <div class="ms_container-lg position-relative">
            <ElmArrow class="arr-left position-absolute top-50 start-0 translate-middle-y" />
            <ElmArrow class="arr-right position-absolute top-50 end-0 translate-middle-y" />
            <img src="../assets/img/svg/svg-4.svg" class="bg-decoration">
            <div class="ms_container-md text-center">

                <h2 class="sct-title">Latest news</h2>
                <p class="sct-sub-title sct-sub-line-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic, perferendis.</p>
                <div class="container mt-5">
                    <div class="row text-start">
                        <div class="col">
                            <ElmCardNews img-t="h1-blog-img-02.jpg" img-b="h1-blog-img-03.jpg" data="May 5,2019"
                                author="Amanda Doe" title="Next investment"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ..." />
                        </div>
                        <div class="col">
                            <ElmCardNews img-t="h1-blog-img-03.jpg" img-b="h1-img-01.jpg" data="May 5,2019"
                                author="Amanda Doe" title="Team Building"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ..." />
                        </div>
                        <div class="col">
                            <ElmCardNews img-t="h1-img-01.jpg" img-b="h1-blog-img-01.jpg" data="May 5,2019"
                                author="Amanda Doe" title="New Business"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<script>
import ElmCardNews from './ElmCardNews.vue'
import ElmArrow from './ElmArrow.vue';
export default {
    components: { ElmCardNews, ElmArrow },
}
</script>

<style lang="scss" scoped>

.bg-decoration{
        position: absolute;
        left: 0;
        top: -200px;
    }
</style>