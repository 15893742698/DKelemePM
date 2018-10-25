<template>
    <div class="bbot">
        <router-link to="/serve">
        <div class="botflyfa">
            <img src="../../imgs/文件.png" alt="" class="botimgs1">
            <div class="botflyaway">
                <p>服务中心</p>
                <img src="../../imgs/前进.png" alt="" class="botimgs2">
            </div>
        </div>
        </router-link>
        <router-link to="/download">
        <div class="botflyfa">
            <img src="../../imgs/饿了么.png" alt="" class="botimgs1">
            <div class="botflyaway">
                <p>下载饿了么APP</p>
                <img src="../../imgs/前进.png" alt="" class="botimgs2">
            </div>
        </div>
        </router-link>
    </div>
</template>
<script>
    export default{
        name:'bot'
    }
</script>
<style>
.botimgs1 {
  width: 5%;
  float: left;
  vertical-align: top;
  margin: 5% 3%;
}
.botimgs2 {
  width: 5%;
}
.botflyaway {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 2%;
  border-bottom: 1px solid #eaeaea;
}
.botflyaway > p {
  font-size: 0.2rem;
}
.bbot {
  border-bottom: 10px solid #eaeaea;
}
</style>

