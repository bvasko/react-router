import React from 'react'
import { render, findDOMNode } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, History, Route, IndexRoute, Link } from 'react-router'
import ContactStore from './ContactStore'

var App = React.createClass({
  render: function() {
    console.log('loaded app');
    return (<div>
              <h1>App loaded</h1>
            </div> );
  }
});

module.exports = App;