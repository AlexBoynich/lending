<template>
  <div id="app">
    <Header msg="Navigation Menu"
    v-bind:navMenu="navMenu"
    />
    <About id="about"/>
    <SkillsBlock class="skills-block" id="skills"/>
    <SocialNetworks class="social-networks-block" id="social"/>
    <LastPosts
    v-bind:lastPosts="data.posts" id="blog"
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
import axios from 'axios';

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
      lastPosts: [
                {title:'There are many reasons to get down', text: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.', date: '10	Oct 21'},
                {title:'Choosing The Right Path', text: 'Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.', date: '58	Oct 20'},
                {title:'Start your journey here', text: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.', date: '29	Oct 18'}
            ],
    }
  },
  mounted() {
    axios 
    .get('/api/data.json') 
    .then((response) => {
      this.data = response.data;
      console.log(this.data.posts.title)
    })
    .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });
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
