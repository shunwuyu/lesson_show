import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import Home from './components/Home';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import TimeEntries from './components/TimeEntries';
import LogTime from './components/LogTime';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/time-entries',
  component: TimeEntries,
  children: [{
    path: 'log-time',
    component: LogTime
  }]
}]

const router = new VueRouter({
  routes
});

// SPA 
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App
})