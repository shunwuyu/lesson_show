import React, { createContext } from "react";

const Context = createContext();

export class MyProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "A",
      age: 18
    };
    this.updateContext = this.updateContext.bind(this);
  }
  updateContext(newData) {
    this.setState(Object.assign({}, this.state, newData));
  }
  render() {
    const contextData = { data: this.state };
    Object.defineProperty(contextData, "updateContext", {
      value: this.updateContext
    });
    return (
      <Context.Provider value={contextData}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const MyConsumer = Component => {
  return props => (
    <Context.Consumer>
      {context => {
        return <Component context={context} {...props} />;
      }}
    </Context.Consumer>
  );
};