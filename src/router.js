import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

// HelloPage
import Hello from '@/components/Hello.vue';

// Login sites
import Login from '@/components/Login/Login.vue';
import SignUp from '@/components/Login/SignUp.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/Login',
      name: 'login',
      component: Login,
    },
    {
      path: '/Signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('login');
  else next();
});
