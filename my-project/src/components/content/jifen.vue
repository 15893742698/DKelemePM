<template>
    <div id="max">
        <!-- 蓝色框边部分 -->
        <div class="bluediv">
            <!-- 白框部分 -->
            <div class="whitediv">
                <!-- 白框顶部 -->
                <div class="whitedivtop">
                    <!-- 白框顶部左边 -->
                    <span>{{dangqian}}</span>
                    <div>
                    <!-- 白框顶部右边 -->
                        <router-link to="/detailexplain">
                            <img :src="srcc" alt="">
                            <span>{{explain}}</span>
                        </router-link>
                    </div>
                </div>
                <p class="price">{{shuzi}}</p><span>{{danwei}}</span>
                <button class="tijiaobtn" :style="'backgroundColor:'+bc">{{tijiao}}</button>
            </div>
        </div>
        <!-- 记录部分 -->
        <div class="condetail">
            <p>{{mingxi}}</p>
            <div>
                <img src="../../imgs/记录.png" alt="">
                <p>{{nothing}}</p>
                <p>{{todo}}</p>
            </div>
        </div>
    </div>    
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "jifen",
  props:{
      dangqian:String,
      explain:String,
      click:String,
      srcc:String,
      lujing:String,
      shuzi:Number,
      danwei:String,
      tijiao:String,
      mingxi:String,
      nothing:String,
      todo:String,
      bc:String
  }
};
</script>
<style>
#max{
    width:100%;
}
.bluediv{
    width: 96%;
    background-color: #436EEE;
    padding: 2%;
}
.whitediv{
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
}
.whitedivtop{
    width: 94%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
}
.whitedivtop>span{
    width: 20%;
    font-size: 0.12rem;
}
.whitedivtop img{
    width:10%;
    vertical-align: bottom;
}
.whitedivtop>div{
    text-align: end;
}
.whitedivtop>div span{
    width: 30%;
    font-size: 0.12rem;
    color:blue;
}
.price{
    font-size: 0.35rem;
    padding: 3%;
    display: inline-block;
}
.price+span{
    font-size: 0.16rem;
    color: black;
}
.tijiaobtn{
    width: 94%;
    margin: 3%;
    height: 50px;
    font-size: 0.2rem;
    border-radius: 10px;
}
.condetail{
    width: 94%;
    margin: 3%;
    font-size: 0.16rem;
}
.condetail>div{
    width: 100%;
    text-align: center;
}
.condetail>div>img{
    width:20%;
    margin: 2%;
}
.condetail>div>p{
    margin: 2%;
    color:gray;
}
.bc{
    background-color: #fff;
}
</style>

