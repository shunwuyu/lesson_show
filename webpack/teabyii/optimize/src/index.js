require('./style.less')
import { Apple } from './component'

const appleModel = new Apple({
  model: 'X'
}).getModel()

console.log(appleModel)