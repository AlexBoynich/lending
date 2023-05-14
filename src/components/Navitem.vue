<template>
    <li @click='$emit("onNavClick")'>
       <router-link
       :to="nav.path"
       v-scroll-to="nav.selector"
        >{{nav.title}}</router-link>
    </li>
</template>

<script>
export default {
    props: {
        nav: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            menuIsShow: false,
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    li{
        display: block;
        padding: 0 20px;
    }
    a{
        text-decoration: none;
    }
    a:hover {
        color: #6E38F7;
    }
</style>