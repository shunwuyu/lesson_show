import React,{Component} from 'react';
import ajax from './ajax';
import local from './local';
class UserName extends Component{
    render(){
        return <label>用户名<input value={this.props.data}  /><br/></label>
    }
}
UserName = ajax(UserName,'username','用户名');
UserName = local(UserName,'username','用户名');
export default UserName;
// class UserName extends Component{
//     componentDidMount(){
//         this.username.value=localStorage.getItem('username')||'请输入昵称';
//     }
//     handleChange=(event)=>{
//         localStorage.setItem('username',event.target.value);
//     }
//     render(){
//         return <label>用户名<input ref={input=>this.username=input} onChange={this.handleChange}  /><br/></label>
//     }
// }
// export default UserName;
