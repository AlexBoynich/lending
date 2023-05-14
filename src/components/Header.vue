<template>
    <div class="header container">
        <div class="images">
            <img alt="Vue logo" src="@/assets/logo.png">
            <img class="burger" :src="`/${menuIsShow ? 'cross' : 'burger'}.png`" alt=""
             @click="toggleMenu"
            >
        </div>
        <div class="nav">
            <ul :class="{'active': menuIsShow}">
                <nav :class="{'active': menuIsShow}">
                <Navitem 
                v-for="nav of navMenu"
                v-bind:nav="nav"
                v-bind:menuIsShow="menuIsShow"
                @onNavClick="toggleMenu()"
                />
            </nav>
            </ul>
         </div>
    </div>
</template> 

<script>
import Navitem from './Navitem.vue';
    export default {
        data:() => {
            return {
                menuIsShow: false
            }
        },
        props: ['navMenu'],
        components: {
            Navitem
        },
        methods: {
            toggleMenu() {
                this.menuIsShow = !this.menuIsShow
            }
        }

}
</script>

<style scoped>
.header{
    display: flex;
    align-items: center;    
    justify-content: space-between;
}
ul{
    list-style-type:none;
    display: flex;
    flex-direction: row;
    margin: 0;
}
img {
  display: flex;
  width: 36px;
  height: 36px;
  z-index: 3;
}
.burger{
    display: none;
}
nav{
    display: flex;
}
.nav{
    display: flex;
}

@media (max-width: 920px) {
    .header{
        position: relative;
        z-index: 2;
        flex-direction: column;
        align-items: center;
    }
    ul{
        display: none;
    }
    .burger{
        display: block;
        width: 17px;
        height: 12px;
        cursor: pointer;
    }
    ul.active{
        display: flex;
        flex-direction: column;
        position: fixed;
        align-items: center;
        text-align: center;
        background-color: #ffffff;
        order: 2;
        padding-top: 80px;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    nav{
        display: block;
    }
    .images {
        display: flex ;
        justify-content: space-between;
        align-items: center;
        flex-direction: row ;
        width: 100%;
    }
}
</style>