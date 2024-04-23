<template>
    <section class="founder  w-100 p-sct ">
        <div class="ms_container-md position-relative">
            <img src="/src/assets/img/h1-img-01.jpg">
            <div class="box">
                <h2 class="sct-title no-dot">Jason Bickford</h2>
                <p class="sct-sub-title sct-sub-line">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                    perferendis.</p>
                <p class="sct-sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores
                    commodi voluptatem omnis voluptate itaque veritatis temporibus quis modi velit!</p>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
img {
    padding: 10px;
    width: 60%;
}

.box {
    background-color: white;
    width: calc(60% - 10px);
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
</style>