<template>
    <div class="detailadddiv">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <div class="xiaoaddmsg">
            <input type="text" placeholder="请填写你的姓名" v-model="namevalue" @input="namewatch" :class="{fail:names}" @blur="nameblur">
            <p v-if="names">请填写您的姓名</p>
            <p v-else></p>
        </div>
        <div class="xiaoaddmsg">
            <router-link to="/home/login/resetadd/detailadadd/searchadd">
                <input type="text" placeholder="小区/写字楼/学校等" v-model="this.$store.state.adaddmsgg.name">
                <p></p>
            </router-link>
        </div>
        <div class="xiaoaddmsg">
            <input type="text" placeholder="请填写详细送餐地址" v-model="detailschoolvalue" @input="detailschoolwatch" :class="{fail:detailschool}">
            <p v-if="detailschool">送餐地址太短了,不能辨识</p>
            <p v-else></p>
        </div>
        <div class="xiaoaddmsg">
            <input type="text" placeholder="请填写能够联系到您的手机号" v-model="phonenumvalue"  @input="phonewatch" :class="{fail:phonenum1}" @blur="phoneblur">
            <p v-if="phonenum==1">请填写正确的手机号</p>
            <p v-else-if="phonenum==2">手机号不能为空</p>
            <p v-else></p>
        </div>
        <div class="xiaoaddmsg">
            <input type="text" placeholder="备用联系电话(选填)" v-model="telephone" @input="tlphonewatch" :class="{fail:tlphone}" @blur="tlphoneblur">
            <p v-if="tlphone">请填写正确的手机号</p>
            <p v-else></p>
        </div>
        <button class="tijiaoadd" @click="tijiaoadds">新增地址</button>
    </div>    
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
export default {
  name: "detailadadd",
  data() {
    return {
      names: false,
      school: false,
      detailschool: false,
      phonenum: 0,
      phonenum1: false,
      tlphone: false,
      telephone: "",
      namevalue: "",
      schoolvalue: "",
      detailschoolvalue: "",
      phonenumvalue: "",
      loading: true
    };
  },
  created() {
    this.$store.commit("changetn", "新增地址");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    this.detailschoolvalue = this.$store.state.adaddmsgg.address;
    this.namevalue = this.$store.state.adobjname;
    this.phonenumvalue = this.$store.state.adobjphone;
    this.telephone = this.$store.state.adobjtelphone;
    this.schoolvalue = this.$store.state.name;
    loadingInstance1.close();
    this.loading = false;
  },
  components: {
    Headd
  },
  methods: {
    namewatch() {
      var reg = /\w{5,17}/;
      var res = reg.test(this.namevalue);
      if (!res) {
        this.names = true;
      } else {
        this.names = false;
      }
    },
    detailschoolwatch() {
      var reg = /\w{5,100}/;
      var res = reg.test(this.detailschoolvalue);
      if (!res) {
        this.detailschool = true;
      } else {
        this.detailschool = false;
      }
    },
    phonewatch() {
      var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      var res = reg.test(this.phonenumvalue);
      if (this.phonenumvalue.length == 0) {
        this.phonenum = 2;
        this.phonenum1 = true;
      } else if (!res) {
        this.phonenum = 1;
        this.phonenum1 = true;
      } else {
        this.phonenum = 0;
        this.phonenum1 = false;
      }
    },
    tlphonewatch() {
      var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      var res = reg.test(this.telephone);
      if (!res) {
        this.tlphone = true;
      } else {
        this.tlphone = false;
      }
    },
    nameblur() {
      // console.log(this.namevalue);
      this.$store.commit("changeaddname", this.namevalue);
    },
    phoneblur() {
      // console.log(this.namevalue);
      this.$store.commit("changeaddphone", this.phonenumvalue);
    },
    tlphoneblur() {
      this.$store.commit("changeaddtlphone", this.telephone);
    },
    tijiaoadds() {
      if (
        this.names == false &&
        this.detailschool == false &&
        this.phonenum1 == false
      ) {
        this.ress = false;
        let loadingInstance1 = Loading.service({ fullscreen: true });
        let url =
          "https://elm.cangdu.org/v1/users/" +
          this.$store.state.usermsg.user_id +
          "/addresses";
        this.$http({
          method: "post",
          url: url,
          withCredentials: true,
          data: {
            user_id: this.$store.state.usermsg.user_id,
            address: this.$store.state.detailadd,
            address_detail: this.$store.state.adaddmsgg.name,
            geohash: this.$store.state.adaddmsgg.geohash,
            name: this.namevalue,
            phone: this.phonenumvalue,
            tag: "aaa",
            sex: 1,
            phone_bk: this.telephone,
            tag_type: 3
          }
        }).then(res => {
          loadingInstance1.close();
          this.loading = false;
          if (this.$store.state.tianjiadizhi == false) {
            this.$router.push({ name: "resetadd" });
          } else {
            this.$router.push({ name: "orderform" });
          }
          this.$store.commit("changeaddtlphone", "");
          this.$store.commit("changeaddphone", "");
          this.$store.commit("changeaddname", "");
          this.$store.commit("changeadd", "");
          this.$store.commit("changeaddmsg", "");
        });
      }
    },
    returnuup() {
      if (this.$store.state.tianjiadizhi == false) {
        this.$router.push({ name: "resetadd" });
      } else {
        this.$router.push({ name: "orderform" });
      }
    },
    godenglu() {
      this.juhua = false;
    }
  }
};
</script>
<style scoped>
.detailadddiv {
  width: 100%;
}
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
.hello {
  border-bottom: 10px solid #eaeaea;
}
.xiaoaddmsg {
  width: 96%;
  padding: 2%;
}
.xiaoaddmsg > p {
  font-size: 0.16rem;
  padding-top: 3%;
}
.xiaoaddmsg > input {
  font-size: 0.16rem;
  width: 98%;
  padding: 1%;
  height: 30px;
  background-color: #eaeaea;
  border-radius: 10px;
  outline: none;
}
.xiaoaddmsg > a > input {
  font-size: 0.16rem;
  width: 98%;
  padding: 1%;
  height: 30px;
  background-color: #eaeaea;
  border-radius: 10px;
  outline: none;
}
.xiaoaddmsg > a > p {
  font-size: 0.16rem;
  padding-top: 3%;
  color: red;
}
.fail {
  border: 1px solid red;
}
.tijiaoadd {
  width: 90%;
  margin: 5%;
  background-color: green;
  height: 0.5rem;
  color: white;
  font-size: 0.16rem;
  border-radius: 10px;
}
</style>

