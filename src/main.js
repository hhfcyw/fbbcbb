import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'

//导入iView组件库
import iView from 'iview'
//导入iView样式
import 'iview/dist/styles/iview.css'

//使用iView组件库
Vue.use(iView)


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
