import React from 'react';
import ReactDOM from 'react-dom';
import { Lesson, Counter, Button } from './05_props/Lesson.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Lesson child={<Button />}><Counter /></Lesson>, document.getElementById('root'));
registerServiceWorker();
