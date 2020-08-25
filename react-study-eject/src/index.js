import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store'
// console.log(jsx);
// ReactDom.render(<App title="不错不错"></App>, document.getElementById('root'));
//提供一个上下文组件，并注入store
ReactDom.render(<Provider store={store}><App title="不错不错" /></Provider>, document.getElementById('root'));