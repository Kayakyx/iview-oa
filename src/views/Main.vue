<template>
  <div class="main">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--
    <div class="header">
      头部
    </div>
    <div class="body">
      <div class="left-menu">
        <PeMenu></PeMenu>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
-->

    <div class="layout">
      <Layout>
        <!--<Header :style="{color: 'yellow'}">LOGO</Header>-->
        <!--用自己写的头部组件-->
        <PeHead></PeHead>
        <Layout>
          <Sider :style="{background: '#fff'}">
            <PeMenu></PeMenu>
          </Sider>
          <Content>
            <router-view></router-view>
          </Content>
        </Layout>
        <!--<Footer>Footer</Footer>-->
      </Layout>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import PeMenu from '@/components/PeMenu.vue'
import PeHead from '@/components/PeHead.vue'

export default {
  name: 'Main',
  components: {PeMenu,PeHead}

}
</script>

<style scoped>

/*
  .main{
    width: 100%;
    height: 100%;
  }
  .header{
    width: 100%;
    height: 80px;
    background: antiquewhite;
  }
  .body{
    height: calc(100vh - 80px);
    display: flex;
  }

  .left-menu{
    width: 240px;
    background-color: yellow;
  }
  .container{
    flex: 1;
  }
*/

  .main{
    width: 100%;
    height: 100%;
  }
  .layout{
    width: 100%;
    height: 100%;
  }

  /*在浏览其中找的 <Sider> 组件对应的 class ，把他的高度撑起来*/
.ivu-layout.ivu-layout-has-sider{
  height: calc(100vh - 64px);
}


</style>
