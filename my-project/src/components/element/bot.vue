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
        <router-link to="/dweleme">
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
export default {
  name: "bot"
};
</script>
<style>
.bbot {
  width: 100%;
}
.bbot > a {
  width: 90%;
}
.botimgs1 {
  width: 5%;
  float: left;
  vertical-align: top;
}
.botimgs2 {
  width: 5%;
}
.botflyfa {
  width: 98%;
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.botflyaway {
  width: 96%;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
}
.botflyaway > p {
  font-size: 0.2rem;
}
.bbot {
  border-bottom: 10px solid #eaeaea;
}
</style>

