<template>
    <section class="container">
        <div class="about">
            <h2 class="name">{{data.promo.title}}</h2>
            <p>{{data.promo.description}}</p> 
            <a class="scroll" href="#skills">{{scroll}}</a> 
        </div>
    <img src="@/assets/$.png">
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data:() => {
        return {
            name: 'Alex',
            info: 'frontend-developer',
            scroll: 'Scroll to more',
            data: [],
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
}
</script>

<style scoped>
.about{
        height: 724px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        padding-right: 570px;
        max-height: 724px;
    }
    img{
        max-width: 550px;
        max-height: 723px;
        width: 40%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        object-fit: cover;
    }
    section{
        position: relative;
        max-height: 724px;
    }
    .name{
        margin: 200px 100px 100px 0;
    }
    .scroll{
        margin-top: 80px;
        margin-bottom: 80px;
    }
        @media (max-width: 920px) {
            img {
                position: relative;
                max-width: 288px;
                max-height: 413px;
                width:100%;
                height: auto;

            }
            .about{
                margin: 0;
                padding: 10px 0;
                height:auto;
            }
            section{
                position: relative;
                display: flex;
                flex-direction: column;
            }
            .scroll{
                margin-top: 30px;
                margin-bottom: 30px;
            }
            .name{
                margin: 15px 0;
            }
                
            }
</style>