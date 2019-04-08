import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../public/reset.css'
//使用iview ui框架

//定制主题
// import '../public/theme.less';
//直接引入
import iView  from 'iview';
//按需引入
// import Checkbox from 'iview/src/components/checkbox';
import 'iview/dist/styles/iview.css';
/*
特别提醒 #
按需引用仍然需要导入样式，即在 main.js 或根组件执行 import 'iview/dist/styles/iview.css';
按需引用是直接引用的组件库源代码，需要借助 babel 进行编译，以 webpack 为例：
module: {
    loaders: [
        { test: /iview.src.*?js$/, loader: 'babel' },
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
}
*/



Vue.config.productionTip = false;

Vue.use(iView);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
