<template>
    <div class="detailexplain">
        <ul>
            <li>
                
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "explaindetail",
  data(){
      return {
          datas1:[],
          datas2:[]
      }
  },
  created() {
    if (this.$store.state.detailexplain == 1) {
      this.$store.commit("changetn", "余额问题");

    } else if (this.$store.state.detailexplain == 2) {
      this.$store.commit("changetn", "红包说明");
    } else if (this.$store.state.detailexplain == 3) {
      this.$store.commit("changetn", "代金券说明");
    } else if (this.$store.state.detailexplain == 4) {
      this.$store.commit("changetn", "积分说明");
    }
  }
};
</script>
<style>
.detailexplain{
    width: 94%;
    padding: 3%;
}
</style>

