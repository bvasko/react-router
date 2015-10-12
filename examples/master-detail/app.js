var React = require('react');
var render = require('react-dom').render;
var Router = require('react-router');
var Route = Router.Route;
var createHistory = require('history').createHistory;
var useBasename =  require('history').useBasename;

/*import React from 'react'
import { render, findDOMNode } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, History, Route, IndexRoute, Link } from 'react-router'
import App from './test'
import ContactStore from './ContactStore'*/

require('./app.css')

const history = useBasename(createHistory)({
  basename: '/master-detail'
})


var Index = React.createClass({
  render: function() {
    return <h1>Address Book</h1>
  }
})

var App = React.createClass({
  render: function() {
    console.log('loaded app');
    return <div>
              <h1>App loaded</h1>
            </div>
  }
});

var route = <Route path="/" component={App} />;
render( <Router routes={route}/>, document.getElementById('example') );

/*render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
    </Route>
  </Router>
), document.getElementById('example'))*/
