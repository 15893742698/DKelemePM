<template>
    <div class="jifenshangcheng" @click="returntt">
        <p>请重新进入</p>
        <p class="returnp">请返回后重新进入积分商城</p>
        <img src="../imgs/航空航天-aerospace-月球-mo.png" alt="">
    </div>
</template>
<script>
    export default{
        name:'jifenshangcheng',
        methods:{
            returntt(){
                this.$router.push({name:"home"})
            }
        }
    }
</script>
<style>
.jifenshangcheng{
    width: 50%;
    padding: 50% 25% 50% 25%;
    text-align: center;
}
.jifenshangcheng>p{
    font-size: 0.3rem;
    color: blue;
    font-weight: bold;
    padding: 3%;
}
.jifenshangcheng>.returnp{
    font-size: 0.2rem;
    color: gray;
    padding: 3%;
}
.jifenshangcheng>img{
    width: 100%;
}
</style>

