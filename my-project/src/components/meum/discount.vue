<template>
    <div class="discount">
            <span id="dcount">0</span>
            <span>元</span>
            <p>我的优惠</p>
    </div>
</template>
<script>
export default {
  name: "discount"
};
</script>
<style>
#dcount{
    font-size: 0.35rem;
    color: red;
    font-weight: bold;
}
.discount{
    border-right: 1px solid #EAEAEA;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 15% 0;
}
.discount>p,.discount>span{
    color:gray;
    font-size: 0.15rem;
}
.discount>p{
    width: 100%;
    text-align: center
}
</style>

