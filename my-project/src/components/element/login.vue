<template>
    <div class="login">
        <img v-if="!this.$store.state.denglu" src="../../imgs/我的.png" alt="" id="login1">
        <img v-else :src="this.srcc" alt="" id="login1">
        <div class="logcen">
            <p>{{username}}</p>
            <div>
                <img src="../../imgs/手机.png" alt="" >
                <span>{{phonenum}}</span>
            </div>
        </div>
        <img src="../../imgs/前进.png" alt="" id="login2">
    </div>
</template>
<script>
    export default {
        name:'login',
        data(){
            return {
                username:"",
                phonenum:"",
                srcc:""
            }
        },
        created() {
            if(!this.$store.state.denglu){
                this.username = this.$store.state.defaultmsg.username
                this.phonenum = this.$store.state.defaultmsg.phone
                this.srcc = this.$store.state.defaultmsg.srcc
                console.log(this.srcc)
            }else{
                this.username = this.$store.state.usermsg.username
                this.srcc="https://elm.cangdu.org/img/"+this.$store.state.usermsg.avatar;
                this.phonenum = this.$store.state.defaultmsg.phone
            }
        },
    }
</script>
<style scoped>
#login1{
    width: 20%;
    border: 2px solid #EAEAEA;
    border-radius: 50%;
}
#login2{
    width: 8%;
}
.login{
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2%;
    background-color: #436EEE;
}
.logcen{
    width: 50%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.logcen>div{
    display: flex;
    align-items: center;
}
.logcen>div>img{
    width: 12%;
    vertical-align: top;

    /* border: 1px solid black; */
}
.logcen>p{
    /* border: 1px solid red; */
    font-size: 0.2rem;
    margin-left: 3%;
    color:white;
    font-weight: bold;
}
span{
    font-size: 0.12rem;
    color:white;
}
</style>

