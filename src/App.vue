<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-aside width="200px">
          <el-image 
              style="width: 200px; height: 200px"
              src="http://ww1.sinaimg.cn/large/ea264325ly1g6d8nj315jj20dw0dw3yl.jpg" 
              fit="fill"/>
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            active-text-color="#333"
            @select="handleSelect">
            <el-submenu index="demo">
              <template slot="title">
                <i class="el-icon-s-data"/><span>Three-Demo</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="helloworld">HelloWord</el-menu-item>
                <el-menu-item index="triangle">Triangle</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="document">
              <template slot="title">
                <i class="el-icon-document"/><span>Document</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="01">01</el-menu-item>
                <el-menu-item index="02">02</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="three">
              <i class="el-icon-s-promotion"/><span slot="title">Three.js</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      path:''
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      if (this.path === keyPath.join('-')) {
        this.$message('Already on this page');
        return
      }
      this.path = keyPath.join('-')
      if ('demo' === keyPath[0]) {
        if ('helloworld' === keyPath[1]) {
          this.$router.push({path:'/helloworld'});
        } else if ('triangle' === keyPath[1]) {
          this.$router.push({path:'/triangle'});
        }
      } else if ('document' === keyPath[0]) {
        if ('01' === keyPath[1]) {
          this.$router.push({path:'/doc/01'});
        } else if ('02' === keyPath[1]) {
          this.$router.push({path:'/doc/02'});
        }
      } else if ('three' === keyPath[0]) {
        this.$router.push({path:'/three'});
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
</style>

<style  rel="stylesheet/scss" lang="scss">
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
    text-align: center;
  }
  .el-main {
    color: #333;
    text-align: center;
  }

</style>