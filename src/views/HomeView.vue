<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <MyMenuVue/>
      </el-aside>
      <el-container>
        <el-header>头部</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>底部</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyMenuVue from '@/layout/MyMenu.vue'
export default {
  name: 'HomeView',
  components: {
    MyMenuVue
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #ff0000;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background: #304156;
    height: 100vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>