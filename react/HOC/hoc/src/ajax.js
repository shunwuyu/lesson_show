import React,{Component} from 'react';
export default function(OldComponent){
      class NewComponent extends Component{
        constructor(){
            super();
            this.state = {data:''};
        }  
        componentWillMount(){
            fetch('/user.json').then(response=>response.json()).then(user=>{
                this.setState({data:user[this.props.data]});
            });
           
        }
        render(){
            return <OldComponent data={this.state.data}  />
        }
      }
      return NewComponent;
}