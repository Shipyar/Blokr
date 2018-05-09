/* eslint linebreak-style: ["error", "windows"] */
import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello.vue';
import Login from '@/components/Login/Login.vue';
import SignUp from '@/components/Login/SignUp.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeResolve((to, from, next) => {
  const { currentUser } = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('hello');
  else next();
});

export default router;
