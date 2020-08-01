import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Server } from "miragejs";
import testJson from './test-json.json';

import HomePage from './component/homepage/homepage.component';

new Server({
  routes() {
    this.namespace = "api";
    this.get("/members/", () => testJson);
  }
});

ReactDOM.render(
    <HomePage />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
