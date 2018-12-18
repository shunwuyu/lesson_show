import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';

// const heading = React.createElement(
//   'h1',
//   { className: 'site-heading' },
//   'Hello, React!'
// );

// class App extends Component {
//   render () {
//     return (
//       <div className="App">
//         <h1 className="site-heading" onClick={() => console.log('clicked')}>Hello, React</h1>
//         { heading }
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />,document.getElementById('root'));
