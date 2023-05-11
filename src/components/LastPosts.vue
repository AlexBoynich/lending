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
// import axios from 'axios';
export default {
    props: ['lastPosts'],
    components: {
        Post
    },
    data () {
        return {
            // data: [],
        }
    },
    // mounted() {
    // axios 
    // .get('/api/data.json') 
    // .then((response) => {
    //   this.data = response.data;
    //   console.log(this.data.posts.title)
    // })
    // .catch(function (error) {
    // // обработка ошибки
    // console.log(error);
    // })
    // .finally(function () {
    //     // выполняется всегда
    // });
    // },
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