<template>
    <div class="youhui">
        <Headd></Headd>
        <!-- 两个路由 -->
        <div class="hbhuodjq">
            <p @click="firstp" id="firstp" class="red">红包</p>
            <p @click="secondp" id="secondp">商家代金券</p>
        </div>
        <Hongbao v-show="istrue"></Hongbao>
        <Daijinquan v-show="!istrue"></Daijinquan>
    </div>
</template>
<script>
import Headd from '../components/element/head'
import Hongbao from '../components/content/hongbao'
import Daijinquan from '../components/content/daijinquan'
export default {
    name:'youhui',
    data(){
        return {
            istrue:true
        }
    },
    methods:{
        firstp(){
            this.istrue=true;
            document.getElementById("firstp").className="red"
            document.getElementById("secondp").className=""
        },
        secondp(){
            this.istrue=false;
            document.getElementById("firstp").className=""
            document.getElementById("secondp").className="red"
        }
    },
    components:{
        Headd,
        Hongbao,
        Daijinquan
    },
    created() {
    this.$store.commit("changetn","我的优惠")
  }
}    
</script>
<style>
.hbhuodjq{
    width: 96%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.16rem;
    margin: 2%;
}
.hbhuodjq>p{
    
    padding-top: 3%;
    padding-bottom: 3%;
}
.red{
    border-bottom: 2px solid blue;
}
</style>

