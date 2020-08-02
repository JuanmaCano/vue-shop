import Vue from "vue";
import Vuex from "vuex";
// to persist data into localStorage
import VuexPersistence from 'vuex-persist'
import products from "../modules/products/index.js";
import cart from "../modules/cart/index.js";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['cart']
})


export default new Vuex.Store({
  modules: {
    products,
    cart
  },
  plugins: [vuexLocal.plugin]
});
