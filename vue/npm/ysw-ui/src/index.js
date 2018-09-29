import MoorSwitch from './packages/switch/index.js';

const components = [
  MoorSwitch
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(windowVue);
}

export default {
  install,
  MoorSwitch
}
