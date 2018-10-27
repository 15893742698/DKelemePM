<template>
    <div>
        <Headd></Headd>
        <Inputt></Inputt>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Inputt from "./content/inputt";
import Headd from "./element/head";
export default {
  name: "loginup",
  data() {
    return {
      loading: true
    };
  },
  components: {
    Headd,
    Inputt
  },
  created() {
    this.$store.commit("changetn", "密码登录");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    loadingInstance1.close();
    this.loading = false;
  }
};
</script>
<style scoped>
.hello {
  width: 95%;
  border-bottom: 15px solid #eaeaea;
}
</style>

