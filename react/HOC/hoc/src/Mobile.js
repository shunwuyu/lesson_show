import React,{Component} from 'react';
// class Mobile extends Component{
//     componentDidMount(){
//         this.mobile.value=localStorage.getItem('mobile')||'请输入手机号';
//     }
//     handleChange=(event)=>{
//         localStorage.setItem('mobile',event.target.value);
//     }
//     render(){
//         return <label>手机号<input ref={input=>this.mobile=input} onChange={this.handleChange}  /><br/></label>
//     }
// }
// export default Mobile;
import local from './local';
class Mobile extends Component{
  render(){
      return <label>手机号<input defaultValue={this.props.data}  onChange={this.props.save}/><br/></label>
  }
}
export default local(Mobile,'mobile','手机号');