<template>
    <div class="container">
        <p>Copyright © {{ date }}. All rights reserved.</p>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
        date: new Date().getFullYear(),
    }
    },

}
</script>

<style scoped>
p{
    display: flex;
    justify-content: center;
}
</style>