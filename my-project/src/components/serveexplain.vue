<template>
    <div>
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <p>{{data}}</p>
    </div>
</template>
<script>
export default {
  name: "serveexplain",
  data() {
    return {
      data: ""
    };
  },
  created() {
    this.$store.commit("changetn", this.$route.params.name);
    this.data = this.$route.params.quest;
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
.hello + p {
  width: 94%;
  padding: 3%;
  font-size: 0.16rem;
  color: black;
  line-height: 0.4rem;
}
</style>

