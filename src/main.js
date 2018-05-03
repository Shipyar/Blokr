// Absolute Import
import firebase from 'firebase';

// Regular Import
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

//Vuetify for styling
import Vuetify from 'vuetify'
Vue.use(Vuetify)

Vue.config.productionTip = false;

let app;
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBS94JdmG5CIm0bgAuzuPRKjipnx6Nmh-E',
  authDomain: 'blokr-93a03.firebaseapp.com',
  databaseURL: 'https://blokr-93a03.firebaseio.com',
  projectId: 'blokr-93a03',
  storageBucket: '',
  messagingSenderId: '636822275586',
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});