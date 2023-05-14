<template>
    <div>
        <h2 class="title">Blog</h2>
        <div class="blog container"
        >
        <Post
        v-for="post in postContent.content"
        v-bind:post="post"
        v-key="post"
        />

        </div>
    </div>
</template>

<script>
import Post from '@/components/Post.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data () {
        return {
            
        }
    },
    computed:{
       ...mapGetters('post',['postContent'])
      }, 
    methods: {
      ...mapActions('post',['getData']),
    },
    mounted() {
      this.getData()
    },
    components: {
        Post
    }
}
</script>

<style>
.title{
    margin: 50px;
}

</style>