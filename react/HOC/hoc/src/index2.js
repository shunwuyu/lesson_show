import React from 'react';
import ReactDOM from 'react-dom';
import A from './A';
import B from './B';
import C from './C';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div>
          <h3>高阶组件理解</h3>
          <A/>
          <B/>
          <C/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));