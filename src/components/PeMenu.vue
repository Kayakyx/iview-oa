<template>
    <div class="pe-menu">
        <Menu :theme="theme2"
               width="199px">

            <MenuItem name="0"
                      to="/main/home">
                <Icon type="md-document" />
                首页
            </MenuItem>
            <MenuItem name="1"
                      to="/main/mine">
                <Icon type="md-document" />
                我的
            </MenuItem>

            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-paper" />
                    内容管理
                </template>
                <MenuItem name="2-1" to="/main/order">订单订单</MenuItem>
                <MenuItem name="2-2" to="/main/mine">我的我的</MenuItem>
                <MenuItem name="2-3" to="/main/home">显示首页</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-people" />
                    用户管理
                </template>
                <MenuItem name="3-1" to="/xiaxiede">新增用户</MenuItem>
                <MenuItem name="3-2" to="/xiaxiede">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="4-1" to="/xiaxiede">新增和启动</MenuItem>
                    <MenuItem name="4-2" to="/xiaxiede">活跃分析</MenuItem>
                    <MenuItem name="4-3" to="/xiaxiede">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="4-4" to="/xiaxiede">用户留存</MenuItem>
                    <MenuItem name="4-5" to="/xiaxiede">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "PeMenu",
        data () {
            return {
                //设置主题
                theme2: 'dark'
            }
        }
    }
</script>

<style scoped>
    .pe-menu{
        margin: 1px 0 0 1px;
        border-radius: 6px;
        overflow: hidden;
        height: 100%;
        background: #515a6e;
    }
    .ivu-menu-item:hover{
        background: #2d8cf0!important;
    }
    /*这选择器都是从浏览器中复制，然后写自己的样式，这样就把原来的样式覆盖掉了*/
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
        border-right: none;
        color: #fff;
        background: #2d8cf0!important;
    }


    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item:hover{
        background: #2d8cf0!important;
    }



</style>