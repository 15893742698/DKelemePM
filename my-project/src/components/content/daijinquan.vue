<template>
<!-- 最大的div-->
    <div class="djqmax">
        <div class="djqluyou">
            <router-link to="/djqexplain">
            <img src="../../imgs/问号.png" alt="">
            <p>商家代金券说明</p>
            </router-link>
        </div>
        <div class="dweleme">
            <img src="../../imgs/material，禁止sim卡，sim无法使用.png" alt="">
            <p>无法使用代金券</p>
            <span>非客户端或客户端版本过低</span>
                <div>
                    <router-link to="/dweleme">
                下载或升级客户端
                </router-link>
                </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'daijinquan'
    }
</script>
<style>
.djqmax{
    width: 98%;
    padding-right: 2%;
    background-color: #eaeaea;
}
.djqluyou{
    width: 94%;
    padding: 3%;
    text-align: end;
}
.djqluyou img{
    width: 5%;
    vertical-align: bottom;
}
.djqluyou p{
    margin-bottom: 1%;
    display: inline-block;
    font-size: 0.16rem;
    color:blue;
}
.dweleme{
    width: 50%;
    margin: 22%;
    text-align: center
}
.dweleme>p{
    font-size: 0.16rem;
    margin: 2%;
}
.dweleme>span{
    color:gray;
    font-size: 0.1rem;
}
.dweleme>div{
    width: 100%;
    background-color: green;
    margin: 3%;
    padding: 3%;
    border-radius: 5px;
    margin-bottom: 5%;
}
.dweleme>div>a{
    font-size: 0.1rem;
    color:white;
}
</style>

