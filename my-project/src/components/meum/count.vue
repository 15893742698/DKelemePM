<template>
    <div class="count">
            <span id="count">{{count}}</span>
            <span>分</span>
            <p>我的积分</p>
    </div>
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "count",
  data(){
      return {
          count:""
      }
  },
  created(){
      if(!this.$store.state.denglu){
          this.count = 0
      }else{
          this.count = this.$store.state.usermsg.point
      }
  }
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

