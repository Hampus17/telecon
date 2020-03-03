import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';
import App from './App';
import store from './store';


const render = () => { 
    logger();
    ReactDOM.render(<App />, document.getElementById('root')); 
}

render();
store.subscribe(render);

function logger() {
    console.log("%c Rendered with...", "background: purple; color: #FFF");
    console.log(store.getState());
}
