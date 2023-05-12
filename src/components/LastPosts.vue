<template>
    <div class="container">
        <h2>{{lastPosts.title}}</h2>
        <a href="#">All posts</a>
        <Post class="post"
        v-for="post in lastPosts.content"
        v-bind:post="post"
        v-key="post"
        />
    </div>
</template>

<script>
import Post from './Post.vue';
export default {
    props: ['lastPosts'],
    components: {
        Post
    },
    data () {
        return {
        }
    },
}

</script>

<style scoped>

a{
    display: flex;
    justify-content: end;
    margin-bottom: 40px;
    pointer-events: none;
}
.post{
    margin: 25px auto;
}
h2{
    margin: 20px auto 50px;
}

</style>