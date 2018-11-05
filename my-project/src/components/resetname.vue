<template>
    <div class="resetname">
        <Headd></Headd>
        <div class="rename">
            <input type="text" v-model="rename" placeholder="输入用户名" @input="jtinput" :class="{redd:res}">
            <p>{{resetnametips}}</p>
            <button @click="rename33" :disabled="res">确认修改</button>
        </div>
        <el-collapse-transition>
        <div class="songzi" v-if="songzi">
            <img src="../imgs/感叹.png" alt="">
            <p>{{failmsg}}</p>
            <button @click="godenglu">确认</button>
        </div>
        </el-collapse-transition>
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
      loading: true,
      failmsg: "",
      songzi: false
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
      var res = reg.test(this.rename);
      if (!res) {
        res = true;
        this.resetnametips = "用户名长度在5到24位之间";
      } else {
        res = false;
        this.resetnametips = "用户名只能修改一次(5-24字符之间)";
      }
    },
    rename33() {
      var reg = /\w{5,24}/;
      var res = reg.test(this.rename);
      this.songzi = true;
      if (!res) {
        this.failmsg = "请重新输入用户名";
      } else {
        this.failmsg = "修改用户名成功";
      }
    },
    godenglu() {
      var reg = /\w{5,24}/;
      var res = reg.test(this.rename);
      this.songzi = false;
      if (res) {
        this.$router.push({ name: "home" });
        this.$store.state.usermsg.username = this.rename;
      }
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
  height: 0.5rem;
  color: white;
  background-color: blue;
  border-radius: 10px;
  font-size: 0.2rem;
}
.redd {
  border: 1px solid red;
}
.songzi {
  width: 90%;
  padding: 5%;
  text-align: center;
  z-index: 3;
  position: fixed;
  top: 25%;
  background-color: rgb(192, 251, 192);
}
.songzi > img {
  width: 30%;
}
.songzi > p {
  font-size: 0.16rem;
  padding: 3%;
}
.songzi > button {
  font-size: 0.2rem;
  height: 0.5rem;
  background-color: rgb(39, 175, 39);
  color: white;
  border-radius: 10px;
  line-height: 0.5rem;
  padding: 2%;
  width: 96%;
}
</style>

