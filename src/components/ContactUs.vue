<template>
    <section class="form container">
        <h2 id="contactUs">Contact us</h2>
        <p class="small-paragraph">Life is 10% what happens to you and 90% how you react to it. It does not matter how slowly you go as long as you do not stop. Confucius.</p>
        <form class="form">
            <div class="name-email">
                <input v-model.lazy="userName" class="name inputs" :class="{notValid: nameError}" type="text" size="40" placeholder="Your name">
                <input v-model.lazy="userEmail" :class="{notValid: emailError}"  class="email inputs" type="text" size="40" placeholder="Email">
            </div>
                <textarea v-model.lazy="userDescription" :class="{notValid: descriptionError}" class="description inputs" name="description" cols="40" rows="3" placeholder="Description (optional)"></textarea>
                <button id="button" class="button inputs" @click="doPost()">SEND</button>
            </form>
    </section>
</template>

<script>
    import axios from 'axios';
    export default {
        props:['buttonProps'],
        data () {
            return {    
                userName: '',
                userEmail: '',
                userDescription: '',
                nameError: false,
                emailError: false,
                descriptionError: false,
            }
        },
        methods() {
            doPost = () => {
                axios 
                .post('https://jsonplaceholder.typicode.com/users', { 
                    firstName: this.userName,
                    email: this.userEmail,
                    description: this.userDescription,
                })
                .then((response) => {
                    console.log();
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },
        watch: {
            userName: function(){
                const validName = new RegExp('[^a-zA-Zа-яА-Я ]');
                    if ((validName.test(this.userName)) || this.userName === ''){
                        this.nameError = true
                    } else {
                        this.nameError = false
                    }
            },
            userEmail: function(){
                const validEmail = new RegExp('^((([0-9A-Za-z]{1}[-0-9A-z\\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\\.){1,}[-A-Za-z]{2,})$');
                if ((validEmail.test(this.userEmail)) || this.userEmail === ''){
                        this.emailError = false
                    } else {
                        this.emailError = true
                    }
            },
            userDescription: function () {
                const validDescription = new RegExp('привет');
                if ((validDescription.test(this.userDescription)) || this.userDescription === ''){
                    
                    let arraysOfValidDesc = this.userDescription.split(validDescription);
                    let validDesc = arraysOfValidDesc[0] + '*****' +  arraysOfValidDesc[1];
                    this.userDescription = validDesc;
                    } else {
                        this.descriptionError = false
                    }
            }
        }
    }
</script>

<style scoped>
.notValid{
    border: 1px solid red;
}
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
input, textarea{
    display: flex;
    border-radius: 4px;
    margin: 20px 10px 0;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align:start;
    border: 1px solid #CAD1E1;
    padding: 12px 15px;
    box-sizing: border-box;
}
.name-email{
    display: flex;
    flex-direction: row;
}
input {
    width: 218px;
}
textarea{
    width: 460px;
    height: 122px;
}
button{
    display: flex;
    width: 160px;
    height: 46px;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    background-color: #6E38F7;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 12px;
    margin-top: 30px;
    margin-bottom: 100px;
    border-radius: 4px;
}
button:hover{
    cursor: pointer;
}

@media (max-width: 920px) {
    .name-email{
        flex-direction: column;
    }
    input{
        width: 288px;
        height: 46px;
    }
    textarea{
        width: 288px;
        height: 122px;
    }
    button{
        width: 288px;
        height: 46px;
        margin-bottom: 60px;
    }
}
</style>