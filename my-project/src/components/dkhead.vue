<template>
    <div class="dkhello">
          <img :src="this.src" alt="" @click="returnup()">
          <p>{{$store.state.titlename}}</p>
    </div>
</template>
<script>
    export default {
        name:'headd',
        data(){
          return {
            src:""
          }
        },
        methods:{
          returnup(){
            this.$router.go(-1)
          }
        },
        created() {
            this.$store.commit("changesrc","")
        },
    }
</script>
<style>
.dkhello{
  width: 95%;
  background-color: #436EEE;
  height: 50px;
  border-bottom: 1px solid #436EEE;
  line-height: 50px;
  text-align: center;
  padding-left: 5%; 
  overflow: hidden;
}
.dkhello img {
  float: left;
  width: 10%;
  vertical-align: top;
  margin-top: 1%;
  /* border: 1px solid red; */
}
.dkhello p{
  font-size: 0.2rem;
  color: white;
  font-weight: bold;
  margin-right: 15%;
}
a{
  color:black;
}
</style>

