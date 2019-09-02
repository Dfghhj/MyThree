<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-aside width="200px">
          <el-image 
              style="width: 200px; height: 200px"
              src="http://ww1.sinaimg.cn/large/ea264325ly1g6d8nj315jj20dw0dw3yl.jpg" 
              fit="fill"
              @click="clickHomeImg"/>
          <el-menu
            default-active="demo"
            class="el-menu-vertical-demo"
            active-text-color="#333"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect">
            <el-submenu index="demo">
              <template slot="title">
                <i class="el-icon-s-data"/><span>Three-Demo</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="triangle">Triangle</el-menu-item>
                <el-menu-item index="greenCube">Green Cube</el-menu-item>
                <el-menu-item index="3DText">3D Text</el-menu-item>
                <el-submenu index="lol">
                  <span slot="title">LOL</span>
                  <el-menu-item index="kindred">Kindred</el-menu-item>
                </el-submenu>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="document">
              <template slot="title">
                <i class="el-icon-document"/><span>Document</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="01">01.基本概念</el-menu-item>
                <el-menu-item index="02">02.常见的图元</el-menu-item>
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
    handleOpen(index) {
      if ('demo' === index) {
        this.$router.push({path:'/demo'});
      }
    },
    handleClose(index) {
      if ('demo' === index) {
        this.$router.push({path:'/'});
      }
    },
    handleSelect(key, keyPath) {
      if (this.path === keyPath.join('-')) {
        this.$message('Already on this page');
        return
      }
      this.path = keyPath.join('-')
      if ('demo' === keyPath[0]) {
        if ('triangle' === keyPath[1]) {
          this.$router.push({path:'/triangle'});
        } else if ('greenCube' === keyPath[1]) {
          this.$router.push({path:'/greenCube'});
        } else if ('3DText' === keyPath[1]) {
          this.$router.push({path:'/3DText'});
        } else if ('lol' === keyPath[1]) {
          if ('kindred' === keyPath[2]) {
            this.$router.push({path:'/lol/kindred'});
          }
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
    },
    clickHomeImg() {
       this.$router.push({path:'/'});
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
  .el-submenu__title {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  .el-menu-item {
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

</style>