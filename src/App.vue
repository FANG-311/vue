<template>
  <div id="app">
    <!--声明路由连接-->
    <!-- <router-link to="/discover">发现</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login.vue'
export default {
  name: 'App',
  data:function(){
    return {
      
    }
  },
  methods:{

  },
  created:function(){
    
  },
  mounted:function(){
    console.log("app被挂载")
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
