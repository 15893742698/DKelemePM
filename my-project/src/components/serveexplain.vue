<template>
    <div>
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
    </div>
</template>
<script>
export default {
  name: "serveexplain",
  data() {
    return {
        datas:[]
    };
  },
  created() {
    console.log(this.$route.params.index);
  },
  methods: {
    returnuup() {
      this.$router.push({ name: "serve" });
    }
  }
};
</script>
<style>
.hello {
  width: 95%;
  background-color: #436eee;
  height: 50px;
  border-bottom: 1px solid #436eee;
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
}
.hello p {
  font-size: 0.2rem;
  color: white;
  font-weight: bold;
  margin-right: 15%;
}
.hello > a {
  color: black;
}
</style>

