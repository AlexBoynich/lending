<template>
  <div id="app">
    <Header msg="Navigation Menu"
    v-bind:navMenu="navMenu"
    />
    <About id="about"/>
    <SkillsBlock class="skills-block" id="skills"/>
    <SocialNetworks class="social-networks-block" id="social"/>
    <LastPosts
    v-bind:lastPosts="postContent" id="blog"
    />
    <ContactUs id="contactUs"
    />
  
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
        {title: 'ABOUT', id: '#about'},
        {title: 'SKILLS', id: '#skills'},
        {title:'SOCIAL', id: '#social'},
        {title:'CONTACT US', id: '#contactUs'},
        {title:'BLOG', id: '#blog'}
      ],
    }
  },
  computed:{
     ...mapGetters('post',['postContent'])
    }, 
  methods: {
    ...mapActions('post',['getData']),
  },
  mounted() {this.getData()},
  // async mounted() {
  //   axios 
  //   .get('/api/data.json') 
  //   .then((response) => {
  //     this.data = response.data;
  //     console.log(this.data.posts.title)
  //   })
  //   .catch(function (error) {
  //   // обработка ошибки
  //   console.log(error);
  // })
  // .finally(function () {
  //   // выполняется всегда
  // });
  // },
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
