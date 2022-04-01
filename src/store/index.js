
import Vue from "vue"
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import details from "./modules/details"
import home from './modules/home'
import loading from './modules/loading'
import address from './modules/address'
import login from './modules/login.js';
import verificationImg from './modules/verificationImg.js';
Vue.use(Vuex)
let store = new Vuex.Store({
  
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    details,
    loading,
    address,
    login,
    verificationImg
  },
  plugins: [persistedState()]

})
export default store