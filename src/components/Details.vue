<template>
    <div>
        <div class="summary">
            <h2 class="header6">{{ sum.title }}</h2>
            <p v-show="index==='activeIndex'">{{ sum.p }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        sum: {
            type: Object,
            required: true
        }
    },
    methods: {

    }
}
</script>



<style scoped>
.summary {
    border: 1px solid #E1E5EE;
    margin: 20px 0;
    padding: 12px 15px;
    border-radius: 4px;
}
.summary:hover {
    border: 1px solid #6E38F7;
}
.header6 {
    font-family: Rubik;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
}
</style>