<template>
    <section class="container">
        <h2>Skills</h2>
        <div class="skillsWrapper">
        <div
            :class=" ['drop-content', {'drop-content-active': index === activeIndex }] "
            v-for="(item, index) in skillsList.content"
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
import { mapActions, mapGetters } from 'vuex';
export default {
    data : () => {
        return {
            activeIndex: null,
        }
    },
    mounted() {
        this.getSkillsInformation();
    },
    computed: {
        ...mapGetters('skills', ['skillsList'])
    }, 
    methods: {
        ...mapActions('skills', ['getSkillsInformation']),
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
    },
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