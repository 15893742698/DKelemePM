<template>
    <div class="resetname">
        <Headd></Headd>
        <div class="rename">
            <input type="text" v-model="rename" placeholder="输入用户名" @input="jtinput" :class="{red:res}">
            <p>{{resetnametips}}</p>
            <button @click="rename33" :disabled="res">确认修改</button>
        </div>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
export default {
  name: "resetname",
  components: {
    Headd
  },
  data() {
    return {
      rename: "",
      res: Boolean,
      resetnametips: "用户名只能修改一次(5-24字符之间)",
      loading: true
    };
  },
  created() {
    this.$store.commit("changetn", "修改用户名");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    loadingInstance1.close();
    this.loading = false;
  },

  created() {
    this.res = false;
    this.$store.commit("changetn", "修改用户名");
  },
  methods: {
    jtinput() {
      var reg = /\w{5,24}/;
      this.res = reg.test(this.rename);
      if (!this.res) {
        this.res = true;
        this.resetnametips = "用户名长度在5到24位之间";
      } else {
        this.res = false;
        this.resetnametips = "用户名只能修改一次(5-24字符之间)";
      }
    },
    rename33() {
      this.$store.state.usermsg.username = this.rename;
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style>
.resetname {
  width: 100%;
  height: 100%;
  background-color: #eaeaea;
}
.rename {
  width: 94%;
  padding: 3%;
}
.rename > input {
  width: 94%;
  font-size: 0.16rem;
  padding: 3%;
  outline: none;
}
.rename > p {
  width: 94%;
  padding: 3%;
  font-size: 0.14rem;
}
.rename > button {
  width: 94%;
  padding: 3%;
  height: 50px;
  color: white;
  background-color: blue;
  border-radius: 10px;
}
.red {
  border: 1px solid red;
}
</style>

