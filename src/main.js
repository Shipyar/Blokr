import firebase from 'firebase';
import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router';
import store from './store';
import './registerServiceWorker';
import alertCmp from './components/Shared/Alert.vue';
import config from './config';

Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.component('app-alert', alertCmp);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: config.apiKey,
      authDomain: config.authDomain,
      databaseURL: config.databaseURL,
      projectId: config.projectId,
      storageBucket: config.storageBucket,
      messagingSenderId: config.messagingSenderId,
    });
    firebase.auth().onAuthStateChanged((usr) => {
      if (usr) {
        this.$store.dispatch('autoSignIn', usr)
      }
    });
  },
}).$mount('#app')