<template>
    <div class="count">
            <span id="count">0</span>
            <span>元</span>
            <p>我的积分</p>
    </div>
</template>
<script>
export default {
  name: "count"
};
</script>
<style>
#count{
    font-size: 0.35rem;
    color: palegreen;
    font-weight: bold;
}
.count{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 15% 0;
    }
.count>p,.count>span{
    color:gray;
    font-size: 0.15rem;
}
.count>p{
    width: 100%;
    text-align: center
}
</style>

