import React, { Component } from "react";

function HOCprogress(WrapperedComponent, value: number) {
  return class hocForm extends Component {
    render () {
      const innerStyle = {
        padding: "10px",
        width: "100%"
      };
      const percentStyle = {
        width: `${value}%`,
        height: "20px",
        background: "url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2440333743,1684406640&fm=26&gp=0.jpg)"
      }
      return (
        <div style={innerStyle}>
          <div style={percentStyle}>{value} %</div>
          <WrapperedComponent />
        </div>
      )
    }
  }
}

export default HOCprogress;