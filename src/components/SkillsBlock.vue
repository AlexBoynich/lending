<template>
    <section class="container">
        <h2>Skills</h2>
        <div class="skillsWrapper">
        <div
            :class=" ['drop-content', {'drop-content-active': index === activeIndex }] "
            v-for="(item, index) in data.skills.content"
            :key="index"
        >
                <div class="skillsItemTitle">
                    <h6>{{ item.key }}</h6>
                    <button @click="checkboxToggle(index)"><img :src="`/${(index === activeIndex ) ? 'minus' : 'plus'}.png`" alt=""></button>
                </div>
                <p v-show="index === activeIndex" class='skillsItemText'> {{ item.value }}</p>
             </div>
         </div>
    </section>

</template>

<script>
import axios from 'axios';
export default {
    name: 'SkillsBlock',
    data : () => {
        return {
            activeIndex: null,
            skillsList: [
                {title: 'Html', text:"Do you sometimes have the feeling that you're running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place.<br> <br>The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people; I know it speaks volumes to me. “Autobiography in Five Chapters”"},
                {title: 'CSS', text:"Do you sometimes have the feeling that you're running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place.<br> <br>The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people; I know it speaks volumes to me. “Autobiography in Five Chapters”"},
                {title: 'JavaScript', text:"Do you sometimes have the feeling that you're running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place.<br> <br>The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people; I know it speaks volumes to me. “Autobiography in Five Chapters”"},
                {title: 'Vue', text:"Do you sometimes have the feeling that you're running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place.<br> <br>The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people; I know it speaks volumes to me. “Autobiography in Five Chapters”"}
            ],
            data: [],
        }
    },
    mounted() {
    axios 
    .get('/api/data.json') 
    .then((response) => {
      this.data = response.data;
      console.log(this.data.skills)
    })
    .catch(function (error) {
    // обработка ошибки
    console.log(error);
    })
    .finally(function () {
        // выполняется всегда
    });
    },
    methods: {
        checkboxToggle(index) {
                if ( this.activeIndex === index) {
                    this.activeIndex = null
                } else {
                    this.activeIndex = index
                }
        },
        isActive: (index) => {
            return (index === 'activeIndex') ? true : false;
        }
    }
}
</script>


<style scoped>
    button {
        border:none;
        background-color: transparent;
        cursor: pointer;
    }
    h2{
        margin-bottom: 40px;
    }
    .drop-content{
        padding: 18px 19px;
        border: 1px solid #E1E5EE;
        border-radius: 4px;
        margin-bottom: 20px;
    }
    .drop-content-active {
        border-color: #6E38F7;
    }
    .skillsItemTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .skillsItemText{ 
        margin-top: 20px;
    }
    img{
        background-color: transparent;
    }
</style>