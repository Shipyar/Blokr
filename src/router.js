// import firebase from 'firebase'; commenting out till fixed
import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main.vue';
import Login from '@/components/Login/Login.vue';
import SignUp from '@/components/Login/SignUp.vue';
import NewBlok from '@/components/Bloks/NewBlok.vue';
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
