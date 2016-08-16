import Vue from 'vue'
import VueResource from 'vue-resource'

const API_ROOT = 'https://hacker-news.firebaseio.com/v0';

Vue.use(VueResource);

// HTTP相关
Vue.http.options.crossOrigin = true;
Vue.http.options.credentials = true;


export const TopstoriesResource = Vue.resource(API_ROOT + '/topstories.json?print=pretty');
export const ItemsResource = Vue.resource(API_ROOT + '/item{/id}.json?print=pretty');

