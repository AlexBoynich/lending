<template>
    <div id="app">
      <About id="about"/>
      <SkillsBlock class="skills-block" id="skills"/>
      <SocialNetworks class="social-networks-block" id="social"/>
      <LastPosts
      v-bind:lastPosts="postContent" id="blog"
      />
      <ContactUs id="contactUs"
      />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import SkillsBlock from '@/components/SkillsBlock.vue';
  import About from '@/components/About.vue';
  import Footer from '@/components/Footer.vue';
  import ContactUs from '@/components/ContactUs.vue';
  import SocialNetworks from '@/components/SocialNetworks.vue';
  import LastPosts from '@/components/LastPosts.vue';
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    name: 'App',
    data() {
      return {
        data: [],
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
      Header,
      SkillsBlock,
      About,
      Footer,
      ContactUs,
      SocialNetworks,
      LastPosts
  
    }
  }
  </script>
  
  <style>
  @import "@/stylesApp.css"
  </style>
  
  <style scoped>
    .skillsBlock{
      margin-bottom: 200px;
    }
  </style>
  