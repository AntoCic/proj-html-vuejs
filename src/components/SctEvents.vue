<template>
    <section class="events w-100 position-relative">
        <img class="w-100" src="/src/assets/img/h1-img-09.jpg ">
        <div class="ms_container-md d-flex align-items-center">
            <div class="box-list">
                <h2 class="sct-title no-dot">Upcoming Events</h2>

                <ElmCardEvent :eventObj="event1"/>
                <ElmCardEvent :eventObj="event2"/>
                <ElmCardEvent :eventObj="event3"/>

            </div>
        </div>
    </section>

</template>

<script>
import ElmCardEvent from './ElmCardEvent.vue'
export default {
    components: { ElmCardEvent },
    data() {
        return {
            event1: {
                day: '07',
                data: 'Jan,2022',
                dataTime: '9:00 am - 5:00 pm, Jan 11,2022',
                title: 'Melbourne Coaching',
                location: 'Cambridge, MA D2138, USA'
            },
            event2: {
                day: '11',
                data: 'Jan,2022',
                dataTime: '9:00 am - 5:00 pm, Jan 11,2022',
                title: 'New York Coaching',
                location: 'Cambridge, MA D2138, USA'
            },
            event3: {
                day: '21',
                data: 'Jan,2022',
                dataTime: '9:00 am - 5:00 pm, Jan 11,2022',
                title: 'London Coaching',
                location: 'Cambridge, MA D2138, USA'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
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

    h2 {
        padding: 30px 44px;
        font-size: 28px;
    }
}
</style>