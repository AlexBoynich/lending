<template>
    <section>
        <h2>My social networks</h2>
        <p class="small-paragraph">{{ data.social.subtitle }}</p>
        <Slider/>
    </section>
</template>

<script>
    import axios from 'axios';
    import Slider from '@/components/Slider.vue';
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
        mounted() {
            axios 
            .get('/api/data.json') 
            .then((response) => {
            this.data = response.data;
            console.log(this.data.posts.title)
            })
            .catch(function (error) {
            // обработка ошибки
            console.log(error);
            })
            .finally(function () {
                // выполняется всегда
            });
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