<template>
  <div id="app">
    <Header msg="Navigation Menu"
    v-bind:navMenu="navMenu"
    />
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import SkillsBlock from './components/SkillsBlock.vue';
import About from './components/About.vue';
import Footer from './components/Footer.vue';
import ContactUs from './components/ContactUs.vue';
import SocialNetworks from './components/SocialNetworks.vue';
import LastPosts from './components/LastPosts.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      data: [],
      navMenu: [
        {title: 'ABOUT', id: '#about', path: '/', selector: '#about'},
        {title: 'SKILLS', id: '#skills', path: '/', selector: '#skills'},
        {title:'SOCIAL', id: '#social', path: '/', selector: '#social'},
        {title:'CONTACT US', id: '#contactUs', path: '/', selector: '#contactUs'},
        {title:'BLOG', id: '#blog', path: '/blog', selector: ''}
      ],
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
@import "../src/stylesApp.css"
</style>

<style scoped>
  .skillsBlock{
    margin-bottom: 200px;
  }
</style>
