import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: "Home",
        component: () => import('./components/rsa/RSAModuloCaculate'),
      },
      {
        path: '/RSAModuloCaculate',
        name: 'RSAModuloCaculate',
        component: () => import('./components/rsa/RSAModuloCaculate'),
      },
      {
        path: '/RSASign',
        name: 'RSASign',
        component: () => import('./components/rsa/RSASign'),
      },
      {
        path: '/RSASignCheck',
        name: 'RSASign',
        component: () => import('./components/rsa/RSASignCheck'),
      },
      {
        path: '/RSASystem',
        name: 'RSASystem',
        component: () => import('./components/rsa/RSASystem'),
      },
      {
        path: '/ElgamalEncrypt',
        name: 'ElgamalEncrypt',
        component: () => import('./components/elgamal/ElgamalEncrypt'),
      },
      {
        path: '/ElgamalSign',
        name: 'ElgamalSign',
        component: () => import('./components/elgamal/ElgamalSign'),
      },
      {
        path: '/ElgamalSignCheck',
        name: 'ElgamalSignCheck',
        component: () => import('./components/elgamal/ElgamalSignCheck'),
      },
      {
        path: '/ElgamalSystem',
        name: 'ElgamalSystem',
        component: () => import('./components/elgamal/ElgamalSystem'),
      },
      {
        path: '/Elliptic',
        name: 'Elliptic',
        component: () => import('./components/elliptic/Elliptic'),
      },
    ]
})

export default router