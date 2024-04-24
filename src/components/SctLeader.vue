<template>
    <section class="leader w-100 p-sct bg-white">
        <div class="ms_container-md">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2 class="sct-title">Creative Leader</h2>
                        <div class="sct-sub-title sct-sub-line"></div>
                        <p class="sct-sub-title"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            ipsam modi dolorem at magni tempora similique repudiandae sed harum! Autem iusto sunt
                            adipisci, repellendus voluptatibus perferendis nisi? Repudiandae voluptates </p>
                        <a href="#" class="read-more"></a>
                    </div>
                    <div class="col">
                        <ElmCardLeader titolo="Mentorship" :progress="78" />
                        <ElmCardLeader titolo="Education" :progress="95" />
                        <ElmCardLeader titolo="Learning" :progress="65" />
                        <ElmCardLeader titolo="Motivation" :progress="83" />
                    </div>
                </div>
            </div>

        </div>

    </section>

</template>

<script>
import ElmCardLeader from './ElmCardLeader.vue'
export default {
    components: { ElmCardLeader },
}
</script>

<style lang="scss" scoped>
.card-leader {
    margin-bottom: 30px;
}
</style>