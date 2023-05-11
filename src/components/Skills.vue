<template>
    <div class="details container">
        <h2 id="skills">Skills</h2>
        <Details
        v-for="sum of summary"
        v-bind:sum="sum"
        />
    </div>
</template>

<script>
import Details from './Details.vue'
export default {
    props: ['summary'],
    components: {
        Details
    }
}
</script>



<style scoped >
#skills{
    margin-top: 100px;
    margin-bottom: 30px;
}
@media (max-width: 920px) {
    
}
</style>