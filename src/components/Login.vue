<template>
  <div>
    <el-input v-model="inputname" placeholder="请输入用户名"></el-input>
    <el-input placeholder="请输入密码" v-model="inputpass" show-password></el-input>
    <router-link to="/main">
      <el-row>
        <el-button type="primary" round @click="login">主要按钮</el-button>
      </el-row>
    </router-link>
    {{count}}
    {{code}}
    <button @click="add">+1</button>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        Userlist: [],
        inputname: '',
        inputpass: '',
        code: 0,
      }
    },
    //监听属性
    computed:{
      count(){
        return this.$store.state.count
      },
    },
    //方法
    methods:{
      add(){
        this.$store.commit("increment")
      },

      login(){
        const vm = this
        this.$http.post("/login",{
          username: this.inputname,
          password: this.inputpass
        })
        .then((response)=>{
          vm.$store.commit("reception",response)
          vm.code = response.data.code
          if(vm.code==20000){
            vm.$store.commit("Verify")
            // 获取登录前的路由地址，如果没有则跳转到首页
            const redirect = this.$route.query.redirect || '/'
            this.$router.push(redirect) // 跳转回原来要访问的页面
          }
        })
      }

    },
    created:function(){
      this.$http.get("/user").then((response)=>{
        this.Userlist = response.data
      })
    },
  }
</script>
