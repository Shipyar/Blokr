import firebase from 'firebase';
import 'firebase/firestore';
import Vuefire from 'vuefire';
import Vue from 'vue';
import Vuex from 'vuex';
import { db } from './main';

Vue.use(Vuex);
Vue.use(Vuefire);

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    loadedBloks: [

    ],
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
    clearUser(state) {
      state.user = null;
    },
    createBlok(state, payload) {
      state.loadedBloks.push(payload);
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
        commit('setLoading', false);
      }).catch((error) => {
        commit('setLoading', false);
        commit('setError', error);
      });
    },
    autoSignIn({ commit }, payload) {
      commit('setUser', { id: payload.uid });
    },
    clearError({ commit }) {
      commit('clearError');
    },
    // Firebase database actions
    createBlokr({ commit }, payload) {
      const blok = {
        title: payload.title,
        priority: payload.priority,
        comment: payload.comment,
        date: payload.date,
        created: payload.created,
      };
      db.collection('Bloks').add(blok)
        .then((data) => {
          commit('createBlok', blok);
        })
        .catch((error) => {
        });
    },
  },
});
