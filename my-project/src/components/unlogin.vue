<template>
    <div>
        <Headd></Headd>
        <Inputt></Inputt>
    </div>
</template>
<script>
import Inputt from './content/inputt' 
import Headd from './element/head'
    export default {
        name:'loginup',
        data(){
            return {
            }
        },
        components:{
            Headd,
            Inputt
        },
    created() {
        this.$store.commit("changetn","密码登录")
  }
    }
</script>
<style scoped>
.hello{
    width: 95%;
    border-bottom: 15px solid #EAEAEA;
}
</style>

