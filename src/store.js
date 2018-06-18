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
    loadedBloks: [],
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
    /*
    Sign up user action
    We set the loading state to be true, this allows us access
    to use the spinner on all buttons in different views.
    we also remove errors before submitting a new request to reduce any unwanted error handling.
    firebase - we access the payload from the sign up view which had been broadcast

    */
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
    /*
    Storing an entry into the firestore,
    we create a blok which is then added into the database
    when there has been a successful response we
    create a blok in the vuex store

    -- TO DO --
    Add successfull feeback to the databse store popup
    Add error handling to the response warning message popup
    we can access the setError mutation for this
    */
    createBlokr({ commit, getters }, payload) {
      const blok = {
        title: payload.title,
        priority: payload.priority,
        comment: payload.comment,
        completeAt: payload.date,
        createdAt: payload.created,
        userID: getters.user.id,
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
