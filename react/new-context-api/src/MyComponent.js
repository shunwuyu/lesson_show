import React from "react";
import { MyConsumer } from "./MyContext";

class MyComponent extends React.Component {
  addAge() {
    const { data: { age }, updateContext } = this.props.context;
    const newAge = age + 1;
    updateContext({ age: newAge });
  }
  render() {
    const { name, age } = this.props.context.data;
    return (
      <div>
        name:
        <span>{name}</span>
        age:
        <span>{age}</span>
        <button onClick={() => this.addAge()}>add age</button>
      </div>
    );
  }
}

export default MyConsumer(MyComponent);