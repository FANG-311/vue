<template>
    <div>
        <h1>主界面</h1>
        <el-row>
            <router-link to="/create">
                <el-button type="primary" round>创建活动</el-button>
            </router-link>
            <router-link to="/management">
                <el-button type="primary" round>活动管理</el-button>
            </router-link>
        </el-row>
    </div>
</template>


<script>
    export default{
        mounted:function(){
            console.log(this.$store.state.isLogin)
        },
        create:function(){
            console.log(this.$store.state.isLogin)
        }
    }
</script>
