import Vue from 'vue'
import Vuex from 'vuex'
import vuexdemo1 from './modelus/vuexdemo1'
import vuexdemo2 from './modelus/vuexdemo2'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    vuexdemo1,vuexdemo2
  }
})
