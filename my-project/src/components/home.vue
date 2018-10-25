<template>
  <div class="home">
        <div class="hello">
          <router-link to="./prev">
          <img src="../imgs/后退.png" alt="">
          </router-link>
          <p>我的</p>
        </div>
      <router-link :to="this.router">
        <Login></Login>
      </router-link>
      <Meum></Meum>
      <Ccontent></Ccontent>
      <Bot></Bot>
  </div>
</template>
<script>
import Login from './element/login'
import Meum from './element/meum'
import Ccontent from './element/ccontent'
import Bot from './element/bot'
export default {
  name: "",
  data() {
    return {
      name:"我的",
      router:""
    };
  },
  components:{
    Login,
    Meum,
    Ccontent,
    Bot
  },
  created() {
    if(!this.$store.state.denglu){
      this.router = this.$store.state.unlogin.login
    }else{
      this.router = this.$store.state.login.login
    }
  }
};
</script>
<style>
.hello{
  width: 95%;
}
.home>a{
  width: 95%;
}
.hello{
  width: 95%;
  background-color: #436EEE;
  height: 50px;
  border-bottom: 1px solid #436EEE;
  line-height: 50px;
  text-align: center;
  padding-left: 5%; 
  overflow: hidden;
}
.hello img {
  float: left;
  width: 10%;
  vertical-align: top;
  margin-top: 1%;
  /* border: 1px solid red; */
}
.hello p{
  font-size: 0.2rem;
  color: white;
  font-weight: bold;
  margin-right: 15%;
}
.hello>a{
  color:black;
}
</style>
