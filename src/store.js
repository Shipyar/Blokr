/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    clearuser(state) {
      state.user = null;
    },
  },
  actions: {
    signUpUser({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid,
            bloks: [],
          };
          commit('setUser', newUser);
        }).catch((error) => {
          commit('setLoading', false);
          commit('setError', error);
        });
    },
    signInUser({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid,
            bloks: [],
          };
          commit('setUser', newUser);
        }).catch((error) => {
          commit('setLoading', false);
          commit('setError', error);
        });
    },
    signOutUser({ commit }) {
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().signOut().then(() => {
        commit('clearUser');
      }).catch((error) => {
        commit('setLoading', false);
        commit('setError', error);
      });
    },
    clearError({ commit }) {
      commit('clearError');
    },
  },
});
