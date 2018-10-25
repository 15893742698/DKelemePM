<template>
    <div class="hello">
          <router-link to="./prev">
          <img src="../../imgs/后退.png" alt="">
          </router-link>
          <p>{{$store.state.titlename}}</p>
    </div>
</template>
<script>
    export default {
        name:'headd',
        data(){
          return {
            
          }
        }
    }
</script>
<style>
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
a{
  color:black;
}
</style>

