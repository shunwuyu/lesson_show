import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Parent = {
  template: `
    <div class="parent">
      <h2>Parent</h2>
      <router-view class="child"></router-view>
    </div>
  `
}

const Default = { template: '<div>default</div>'}
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>'}
const Baz = { template: '<div>baz</div>' }
const Qux = {
  template: `
    <div class="nested-parent">
      <h3>qux</h3>
      <router-link :to="{name: 'quux'}">/quux</router-link>
      <router-view class="nested-child"></router-view>
    </div>
  `
}

const Quux = { template: '<div>quux</div>'}

const Quy = {
  template: `
    <div class="nested-parent-other">
      <h3>quy</h3>
      <pre>{{$route.params.quyId}}</pre>
    </div>
  `
}
const Zap = { template: '<div><h3>zap</h3><pre>{{ $route.params.zapId }}</pre></div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/', redirect: '/parent'
    },
    {
      path: '/parent',
      component: Parent,
      children: [
        {
          path: '',
          component: Default
        },
        {
          path: 'foo',
          component: Foo
        },
        {
          path: 'bar',
          component: Bar
        },
        {
          path: '/baz',
          component: Baz
        },
        {
          path: 'qux/:quxId',
          component: Qux,
          children:[{
            path: 'quux',
            name: 'quux',
            component: Quux
          }]
        },
        {
          path: 'quy/:quyId',
          component: Quy
        },
        { name: 'zap', path: 'zap/:zapId?', component: Zap }
      ]
    }
  ]
})

new Vue({
  router,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
