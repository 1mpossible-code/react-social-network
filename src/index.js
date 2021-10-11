import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
    messages: [
        {id: 1, text: 'text1'},
        {id: 2, text: 'text2'},
        {id: 3, text: 'text3'},
        {id: 4, text: 'text4'},
        {id: 5, text: 'text5'},
    ],
    dialogs: [
        {id: 1, name: 'name1'},
        {id: 2, name: 'name2'},
        {id: 3, name: 'name3'},
        {id: 4, name: 'name4'},
        {id: 5, name: 'name5'},
    ]
};

ReactDOM.render(
    <React.StrictMode>
        <App data={data}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
