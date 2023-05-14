<template>
    <div class="post">
        <img src="../assets/postImage.png" alt="">
        <div class='content'>
            <h4>{{ post.title }}</h4>
            <p class="postText">{{ post.description }}</p>
            <div class="dateAndA">
                <p class="small-paragraph">{{ post.date }}</p>
                <router-link to="/blog/post/:id">READ MORE</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
        }
    }
}
</script>

<style scoped>
.post{
    display: flex;
}
img {
    width: 440px;
    height: 270px;
    background-color: #6E38F7;
}
a{
    float: right;
}
.dateAndA{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 40px 10px;
}
h4{
    width: 460px;
    margin: 0 40px;
}
.postText{
    width: 460px;
    margin: 20px 40px;
    max-height: 132px;
    overflow: auto;
}
.content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    height: 270px;
}
@media (max-width: 920px) {
    img{
        width: 214px;
        height: 218px;
    }
    .post{
        display: flex;
        flex-direction: column;
        width: 214px;
        align-items: center;
    }
    .dateAndA{
        flex-direction: column;
        align-items: start;
    }
    .postText{
        width: 214px;

    }
    h4{
        width: 214px;
    }
    .content{
        height: auto;
    }
    a{
        width: 100%;
        text-align: end;
    }
}


</style>