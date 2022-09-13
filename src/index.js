import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from "redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

const app =(
    <BrowserRouter store={store}> 
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
