import upperText from '../util/util';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import Home from './components/app';

ReactDOM.render(<Home />, document.getElementById('app'));

console.log(upperText.upper('trilha js'))