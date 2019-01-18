import React, { Component } from "react";
import HOCprogress from "./HOCprogress";

class B extends Component {
  render() {
    return <div>这是 B 组件！</div>;
  }
}
export default HOCprogress(B, 98);
