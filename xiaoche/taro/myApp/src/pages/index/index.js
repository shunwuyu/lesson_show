import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        'get up', 
        'coding',
        'sleep'
      ],
      inputVal: ''
    }
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  inputHandler =  (e) => {
    this.inputVal = e.target.value
  }

  addItem = () => {
    let { list } = this.state
    const inputVal = this.inputVal
    if (inputVal == '') return 
    else {
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal: ''
    })
  }

  delItem(index) {
    let { list } = this.state
    list.splice(index, 1);
    this.setState({
      list
    })
  }

  render () {
    let { list, inputVal } = this.state;
    return (
      <View className='index'>
        <Input className="input" type="text" value={inputVal}onInput={this.inputHandler}/>
        <Text className="add" onClick={this.addItem}>添加</Text>
        <View className="liste_wrap">
          <Text>Todo list</Text>
          {
            list.map((item, index) => {
              return <View key={index}>
                <Text>{index + 1}.{item}</Text>
                <Text className="del" onClick={this.delItem.bind(this, index)}>删除</Text>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}

