// import { createApp } from 'vue'
// import App from './App.vue'
import axios from 'axios'

import VueRouter from 'vue-router'
import Vue from 'vue'

import HelloWorld from './components/HelloWorld.vue'
// import Test from './components/graphs/test/Test.vue'
// import Home from './components/Home.vue'

Vue.prototype.$http = axios

// createApp(App).mount('#app')


// 1. Define route components.
// These can be imported from other files
// const HomeComponent = { template: Home }
// const TestComponent = { template: Test }
const HelloComponent = { template: HelloWorld }
// const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: HelloComponent },
  // { path: '/test', component: TestComponent },
  { path: '/hello', component: HelloComponent },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!