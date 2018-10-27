<template>
<!--最大div-->
    <div class="hongbaomax">
        <!-- 说明div -->
        <div class="explaindiv">
            <span>有</span><span class="hongbaoshu">3</span><span>个红包即将到期</span>
                <div>
                    <router-link to="/detail">
                        <img src="../../imgs/问号.png" alt="">
                        <span>红包说明</span>
                    </router-link>
                </div>
        </div>
        <!-- 三个框框 -->
        <ul class="hongbaoul">
            <!-- 第一个框框 -->
            <li class="hbli">
                <div class="hblileft">
                    <p>¥</p>
                    <span>1</span>
                    <p>.0</p>
                    <p class="manjian">满20元可用</p>
                </div>
                <div class="hblicon">
                    <p class="hblibig">分享红包</p>
                    <p>2017-5-23到期</p>
                    <p>限收货手机号为15893742698</p>
                </div>
                <p>剩三日</p>
            </li>
             <li class="hbli">
                <div class="hblileft">
                    <p>¥</p>
                    <span>2</span>
                    <p>.0</p>
                    <p class="manjian">满30元可用</p>
                </div>
                <div class="hblicon">
                    <p class="hblibig">分享红包</p>
                    <p>2017-5-23到期</p>
                    <p>限收货手机号为15893742698</p>
                </div>
                <p>剩三日</p>
            </li>
             <li class="hbli">
                <div class="hblileft">
                    <p>¥</p>
                    <span>4</span>
                    <p>.5</p>
                    <p class="manjian">满40元可用</p>
                </div>
                <div class="hblicon">
                    <p class="hblibig">分享红包</p>
                    <p>2017-5-23到期</p>
                    <p>限收货手机号为15893742698</p>
                </div>
                <p>剩三日</p>
            </li>
            <li class="hbtips">
                <p>限品类:快餐便当、特色菜系、小吃夜宵、甜品饮品、</p>
                <p>异国料理</p>
            </li>
        </ul>
        <p>查看历史红包<span>></span></p>
    </div>    
</template>
<script>
    export default{
        name:'hongbao'
    }
</script>
<style scoped>
.hongbaomax{
    width: 96%;
    /* border: 1px solid red; */
    padding:2%;
    background-color: #eaeaea;
    /* background-color: gray; */
}
.explaindiv{
    width: 94%;
    margin: 3%;
    font-size: 0.16rem;
}
.explaindiv>div{
    float: right;
    width: 50%;
    /* border: 1px solid black; */
    text-align: end;
    margin-right: 6%;
}
.explaindiv>div>a{
    color:blue;
}
.hongbaoshu{
    color:red;
}
.explaindiv img{
width: 10%;
vertical-align: top;
}
.hongbaoul{
    width: 100%;
}
.hbli{
    width:94%;
    padding: 1%;
    border-top: 5px dashed orangered; 
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 10px;
    padding-top: 3%;
    padding-bottom: 3%;
    margin-bottom: 3%;
}
.hblileft{
    width: 30%;
    font-size: 0.16rem; 
    color: red;
    border-right: 1px dashed gray;
    margin-top: 3%;
    margin-bottom: 3%;
}
.hblileft>p{
    display: inline-block;
}
.hblileft>span{
    font-size: 0.3rem;
}
.manjian{
    margin-top: 1%;
    width: 100%;
    color:gray;
    font-size: 0.15;
}
.hblicon{
    width:50%;
    margin-top: 3%;
    margin-bottom: 3%;
}
.hblicon>p{
    font-size: 0.06rem;
    margin-top: 1%;
}
.hblicon>.hblibig{
    font-size: 0.12rem;
}
.hblicon+p{
    font-size: 0.12rem;
    margin-top: 3%;
    color:red;
}
.hbtips{
    width: 85%;
    margin-left: 3%;
    font-size: 0.08rem;
    border: 1px solid gray;
    border-radius: 10px;
    margin-top: 2%;
    padding: 2%;
}
.hbtips>p{
    margin-top: 1%;
}
.hongbaoul+p{
    width: 80%;
    margin: 10%;
    text-align: center;
    font-size: 0.1rem;
}
.hongbaoul+p>span{
    margin: 1%;
}
</style>

