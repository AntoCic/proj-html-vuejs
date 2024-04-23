<template>
    <main>
        <SctHero />
        <SctSpecialties />
        <SctFounder />
        <SctEvents />
        <SctLeader />
        <SctNews />
        <SctTestimonials />
        <SctVideos />
        <SctContact />
    </main>
</template>

<script>
import SctHero from './SctHero.vue';
import SctSpecialties from './SctSpecialties.vue';
import SctFounder from './SctFounder.vue';
import SctEvents from './SctEvents.vue';
import SctLeader from './SctLeader.vue';
import SctNews from './SctNews.vue';
import SctTestimonials from './SctTestimonials.vue';
import SctVideos from './SctVideos.vue';
import SctContact from './SctContact.vue';
export default {
    components: {
        SctHero,
        SctSpecialties,
        SctFounder,
        SctEvents,
        SctLeader,
        SctNews,
        SctTestimonials,
        SctVideos,
        SctContact
    }
}
</script>

<style lang="scss" scoped></style>