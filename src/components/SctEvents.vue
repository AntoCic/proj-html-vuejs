<template>
    <section class="events w-100 position-relative">
        <img class="w-100" src="/src/assets/img/h1-img-09.jpg ">
        <div class="ms_container-md d-flex align-items-center">
            <div class="box-list">
                <div class="list-items">
                    <h2 class="sct-title no-dot">Upcoming Events</h2>
                </div>
                <div class="list-items">
                    <div class="lc-data">
                        <p class="mb-0">07</p>
                        <p class="mb-0">Jan,2022</p>
                    </div>
                    <div class="lc-contents">
                        <h3 class="lc-title">Melbourne Coaching</h3>
                        <p class="lc-info">9:00 am - 5:00 pm, Jan 11,2022</p>
                    <p class="lc-info">Cambridge, MA D2138, USA</p>
                    <a href="#" class="lc-read">READ MORE</a>
                    </div>
                    
                </div>
                <div class="list-items">
                    <div class="lc-data">
                        <p class="mb-0">07</p>
                        <p class="mb-0">Jan,2022</p>
                    </div>
                    <div class="lc-contents">
                        <h3 class="lc-title">Melbourne Coaching</h3>
                        <p class="lc-info">9:00 am - 5:00 pm, Jan 11,2022</p>
                    <p class="lc-info">Cambridge, MA D2138, USA</p>
                    <a href="#" class="lc-read">READ MORE</a>
                    </div>
                    
                </div>
                <div class="list-items">
                    <div class="lc-data">
                        <p class="mb-0">07</p>
                        <p class="mb-0">Jan,2022</p>
                    </div>
                    <div class="lc-contents">
                        <h3 class="lc-title">Melbourne Coaching</h3>
                        <p class="lc-info">9:00 am - 5:00 pm, Jan 11,2022</p>
                    <p class="lc-info">Cambridge, MA D2138, USA</p>
                    <a href="#" class="lc-read">READ MORE</a>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

.ms_container-md {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}



.box-list {
    background-color: #FAFAFA;
    width: 522px;

    .list-items {
        display: flex;

        padding: 30px 44px;

        .sct-title {
            font-size: 28px;
        }
    }
}

.lc-data {
    width: 20%;
    height: 55px;
    background-color: $orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.lc-contents {
    width: 80%;
    padding: 0 20px;

    .lc-info {
        color: $gray;
    }

    .lc-read {
        font-size: 20px;
    }
}

.lc-title {
    font-size: 20px;
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-style: normal;
}
</style>