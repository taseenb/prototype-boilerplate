"use strict";

// Set app title
window.document.title = 'App';

// Create global App var
window.App = window.App || {};

// Modules
var Mediator = require( 'mediator-js' ).Mediator;
var Config = require( './config' );
var View = require( './View' );

(function init() {

  // Basic View (Backbone-like)
  App.View = View;

  // Touch support?
  App.isTouch = 'ontouchstart' in window;
  App.click = App.isTouch ? 'touchstart' : 'click';

  // Store config in global
  App.config = Config;

  // Start mediator
  App.mediator = new Mediator;

  // Resize event (published by mediator on every window resize)
  var resizeEvent = require( './events/resize' );
  new resizeEvent();

  // Views container
  App.views = {};

  // Main view
  var MainView = require( './views/main' );
  var mainView = new MainView();
  mainView.render();

}());


