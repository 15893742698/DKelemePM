<template>
    <div>
        <div @click="tiao" class="details"><span> &lt; </span>商家详情</div>
        <div class="deta-one">
            <p class="p">活动与属性</p>
            <div class="aa">
            <p>新用户8折(APP专享)</p>
            <p>该商家支持开发票,请在下单时添好发票抬头(APP专享)</p>
            </div>
        </div>
        <div class="deta-two">
            <router-link tag="p" :to="{name:'prise',params:{}}">食品监督安全公示 <span>企业认证详情 &gt;</span></router-link>
            <div class="deta-img">
            <div><img src="../imgs/S81031-10592976.png" alt=""></div>
            <div class="deta-p"><p>监督检查结果: <span>良好</span></p>
                <p>检查日期:</p>
            </div>
            </div>
        </div>
        <div class="deta-three">
            <p class="p1">商家信息</p>
            <p class="p2">吃啥啦</p>
            <p class="p2">地址:</p>
            <p class="p2">营业时间</p>
            <p class="p2">营业执照 <span>&gt;</span></p>
            <p class="p2">餐饮服务许可证<span>&gt;</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'detailss',
        created(){
            console.log(this.$route.params.data);
        },
        methods:{
            tiao() {
      this.$router.go(-1);
    }
        }
    }
</script>

<style scoped>
.details{
    height: .5rem;
    font-size: .2rem;
    background: rgb(70, 70, 230);
    color: white;
    text-align: center;
    line-height: .5rem;
}
.details>span{
    font-size: .3rem;
    float: left;
}
.deta-one{
    /* width: 95%; */
    border: 1px solid red;
}
.p{
    /* height: 25px; */
    margin-top: .1rem;
    font-size: .18rem;
}
.aa{
    /* border: 1px solid red; */
    border-top: 1px solid gray;
    padding: .2rem;
    margin-top:.2rem;
    font-size: .15rem; 
}
.deta-one p:nth-child(4){
    font-size: .15rem;
}
.deta-two{
    /* width: 95%; */
    border: 1px solid pink;
}
.deta-two>p{
    font-size: .18rem;
    margin: .2rem;
}
.deta-two>p>span{
    float: right;
    margin-bottom: .1rem
}
.deta-img>div>img{
    width: .5rem;
}
.deta-img{
    display: flex;
}
.deta-img>.deta-p{
    /* margin-top: .1rem; */
}
.deta-p>p{
    padding: .05rem;
}
.deta-p>p>span{
    color: green;
    margin-left: .07rem;
}
.deta-three{
    /* width: 95%; */
    border: 1px solid black;
    margin-top: .1rem;
}
.p1{
    font-size: .18rem;
    margin-top: .1rem;
}
.p2{
    font-size: .15rem;
    margin-top: .08rem;
    border-bottom: 1px solid gray;
    margin: .2rem;
}
.p2>span{
    font-size: .2rem;
    float: right;
}
</style>