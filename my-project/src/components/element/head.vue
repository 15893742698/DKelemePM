<template>
    <div class="hello">
          <img src="../../imgs/后退.png" alt="" @click="returnup()">
          <p>{{$store.state.titlename}}</p>
    </div>
</template>
<script>
export default {
  name: "headd",
  data() {
    return {};
  },
  methods: {
    returnup() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.hello {
  width: 98%;
  padding: 1%;
  background-color: #436eee;
  border-bottom: 1px solid #436eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hello img {
  width: 10%;
  vertical-align: top;
  margin-top: 0%;
}
.hello p {
  color: white;
  font-weight: bold;
  font-size: 0.2rem;
  width: 58%;
  text-align: start;
}
.hello > a {
  color: black;
}
</style>

