// import firebase from 'firebase'; commenting out till fixed
import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main.vue';
// User Account Components
import Login from '@/components/User/UserSignIn.vue';
import SignUp from '@/components/User/UserSignUp.vue';
// Blokr Components
import NewBlok from '@/components/Blokr/BlokrCreate.vue';

import Welcome from '@/components/Landing/Welcome.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Welcome,
    },
    {
      path: '/SignIn',
      name: 'Login',
      component: Login,
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/newblok',
      name: 'NewBlok',
      component: NewBlok,
    },
    {
      path: '/Blokr',
      name: 'Main',
      component: Main,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

// router.beforeResolve((to, from, next) => {
//   const { currentUser } = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next('login');
//   else if (!requiresAuth && currentUser) next('hello');
//   else next();
// });

export default router;
