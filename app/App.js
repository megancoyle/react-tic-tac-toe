import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Game from './components/Game';

render((
  <Game />
  ), document.getElementById('container'));
