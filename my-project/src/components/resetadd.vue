<template>
    <div class="resetaddmax">
        <Headd></Headd>
        <p class="bianjiadd" @click="bianjiadd">{{bianji}}</p>
        <div class="xinzengdizhi">
          <ul class="alladd" :class="{alladda:youdizhi}">
            <li v-for="(item, index) in adds" :key="index">
              <div>
                <p>{{item.address}}</p>
                <p>{{item.phone}}</p>
              </div>
              <img v-if="bianjiadd1" src="" alt="" @click="deladd">
              <img v-else src="../imgs/取消.png" alt="" @click="deladd">
            </li>
          </ul>
         <div class="adadddiv">
           <router-link to="/detailadadd">
              <div>
                 <p>新增地址</p>
                <img src="../imgs/前进.png" alt="">
              </div>
            </router-link>
         </div>
        </div>
    </div>
</template>
<script>
import Headd from "../components/element/head";
export default {
  name: "resetadd",
  components: {
    Headd
  },
  data() {
    return {
      bianji: "编辑",
      adds:[],
      bianjiadd1:true,
      youdizhi:true,
    };
  },
  created() {
    this.$store.commit("changetn", "编辑地址");
  },
  methods: {
    bianjiadd() {
        // console.log(this.$store.state.usermsg)
      if (!this.$store.state.bianjiadd) {
        this.$store.state.bianjiadd = true;
         this.bianjiadd1 = this.$store.state.bianjiadd
        this.bianji = "编辑";
      } else {
        this.$store.state.bianjiadd = false;
        this.bianjiadd1 = this.$store.state.bianjiadd
        this.bianji = "完成";
      }
    },
    deladd(){
      let url = "https://elm.cangdu.org/v1/users/"+this.$store.state.usermsg.user_id+"/addresses/"+this.adds[0].id;
        this.$http({
          method: "DELETE",
          url: url,
          withCredentials: true,
        }).then(res=>{
          console.log(res)
            this.adds=[]
        });
    }
  },
  created(){
    this.$store.commit("changetn","编辑地址")
    let url = "https://elm.cangdu.org/v1/users/"+this.$store.state.usermsg.user_id+"/addresses";
        this.$http({
          method: "get",
          url: url,
          withCredentials: true,
        }).then(res=>{
           console.log(res);
        if (res.data.length==0) {
          this.adds = [];
          this.youdizhi = false;
        }else{
          this.adds = res.data;
          this.youdizhi = true;
        }
            // console.log("sipengju",this.adds,this.idd);
        });
  }
};
</script>
<style scoped>
.hello{
  border-bottom: 10px solid #eaeaea;
}
.resetaddmax{
  width: 100%;
  position: relative;
}
.resetaddmax>p{
  position: fixed;
  right: 3%;
  top: 2.5%;
  font-size: 0.16rem;
  color: white;
}
.xinzengdizhi{
  width: 100%;
  /* border: 1px solid red; */
}
.alladd{
  width: 94%;
  padding: 2% 3% 2% 3%;
  border-top: 1px solid gray;
  background-color: #eaeaea;
  font-size: 0.16rem;
}
.xinzengdizhi .alladda{
  padding: 4% 3% 4% 3%;
  background-color: palegoldenrod;
}
.alladd>li{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.alladd>li>img{
  width: 8%;
}
.alladd>li p{
  padding-top: 1%;
  padding-bottom: 1%;
}
.adadddiv{
  width: 100%;
  /* border: 1px solid black; */
  font-size: 0.16rem;
  padding-top: 3%;
  padding-bottom: 3%;
}
.adadddiv div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 3%;
}
.adadddiv div>p{
  margin-left: 3%;
}
.adadddiv div>img{
  width: 5%;
  margin-right: 3%;
}
</style>

