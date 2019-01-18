import React from 'react';
import ReactDOM from 'react-dom';

import ClockContainer from './Clock/index.jsx'

ReactDOM.render(<ClockContainer time={ new Date() }/>,
 document.querySelector('#container'));