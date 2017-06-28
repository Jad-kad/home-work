import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';


 let taskList = [{description : 'Break my bike', done : true}, {description : 'Fix my bike', done : false}]

ReactDOM.render(<App tasks={taskList} />, document.getElementById('root'));


