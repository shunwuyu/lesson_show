import React,{Component} from 'react';
export default function(OldComponent,name,placeholder){
      class NewComponent extends Component{
        constructor(){
            super();
            this.state = {data:''};
        }  
        componentWillMount(){
            this.setState({data:localStorage.getItem(name)||placeholder});
        }
        render(){
            return <OldComponent data={this.state.data} />
        }
      }
      return NewComponent;
}
// export default function(OldComponent,name,placeholder){
//       class NewComponent extends Component{
//         constructor(){
//             super();
//             this.state = {data:''};
//         }  
//         componentWillMount(){
//             fetch('/user.json').then(response=>response.json()).then(user=>{
//                 this.setState({data:user[name]||placeholder});
//             });
           
//         }
//         save=(event)=>{
//             localStorage.setItem(name,event.target.values())
//         }
//         render(){
//             return <OldComponent data={this.state.data}  />
//         }
//       }
//       return NewComponent;
// }