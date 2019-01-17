import React, { Component } from "react";
import HOCprogress from "./HOCprogress";

class C extends Component {
  render() {
    return <div>这是 C 组件！</div>;
  }
}
export default HOCprogress(C, 12);
