<template>
    <div>
        <div class="in-one">
            <p><span> &lt; </span>订单列表</p>
        </div>
        <div class="in-two">
            <div class="in-two-1">   
            <img src="../imgs/S81031-10592976.png" alt="">
            <p>吃啥啦 &lt; </p>
            <p>2018-11-01   09:29</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.in-one{
    height: .5rem;
    font-size: .2rem;
    background: rgb(70, 70, 230);
    color: white;
    text-align: center;
    line-height: .5rem;
}
.in-one>p{
    font-weight: bold;
}
.in-one>p>span{
    float: left;
    font-size: .3rem;
}
.in-two-1{
    /* display: flex; */
}
.in-two-1>img{
    width: .7rem;
    height: .7rem;
}
.in-two-1>p:first-child{
    float:left;
    }
</style>