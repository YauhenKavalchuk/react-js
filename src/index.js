import React from 'react';
import ReactDOM from 'react-dom';
import CounterButton from './03_state/Lesson.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CounterButton />, document.getElementById('root'));
registerServiceWorker();
