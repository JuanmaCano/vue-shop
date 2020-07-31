import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import products from "../modules/products/index.js";

export default new Vuex.Store({
  modules: {
    products,
  },
});
