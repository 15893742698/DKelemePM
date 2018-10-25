<template>
    <div class="meum">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <router-link to="/yue">
                        <Yue></Yue>
                    </router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    <router-link to="/discount">
                        <Discount></Discount>
                    </router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <router-link to="/count">
                        <Count></Count>
                    </router-link>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Yue from "../meum/yueee";
import Discount from "../meum/discount";
import Count from "../meum/count";
export default {
  name: "meum",
  components: {
    Yue,
    Discount,
    Count
  }
};
</script>
<style>
.meum{
    border-bottom: 10px solid #EAEAEA; 
}
</style>

