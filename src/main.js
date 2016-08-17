import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import { fromNow } from './filter';

import App from './components/App.vue'
import Home from './components/Home.vue'

Vue.filter('fromNow', fromNow);

// Install plugins
Vue.use(Router);
Vue.use(Resource);
Vue.directive('mdl', {
  bind: function() {
    componentHandler.upgradeElement(this.el);
  }
});


// Set up a new router
var router = new Router()

// Route config
router.map({
  '/home':{
    name: 'home',
    component: Home
  }
});

// For every new route scroll to the top of the page
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

// If no route is matched redirect home
router.redirect({
  '*': '/home'
})

// Start up our app
router.start(App, '#app')
