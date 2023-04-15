import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    token: "",
    appointments: [],
    email: "",
    city: "",
  },
  mutations: {
    storeToken(state, token) {
      state.token = token;
    },
    storeCity(state, city) {
      state.city = city;
    },
  },
  actions: {
    storeToken(context, token) {
      context.commit("storeToken", token);
    },
    storeCity(context, city) {
      context.commit("storeCity", city);
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getCity(state) {
      return state.city;
    },
    getEmail(state) {
      return state.email;
    },
  },
});
