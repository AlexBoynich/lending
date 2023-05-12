<template>
    <section>
        <h2>My social networks</h2>
        <p class="small-paragraph">{{ socialInfo.subtitle }}</p>
        <Slider/>
    </section>
</template>

<script>
    import Slider from '@/components/Slider.vue';
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'SocialNetworks',
        components: {
            Slider
        },
        data() {
            return {
                data: [],
            }
        },
        computed: {
            ...mapGetters('slider', ['socialInfo'])
        },
        methods: {
            ...mapActions('slider', ['getSocialInfo'])
        },
        mounted() {
            this.getSocialInfo()
        },
    }
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
}
    h1 {
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 40px;
    }
    .small-paragraph{
        max-width: 100%;
    }
</style>