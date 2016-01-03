var _ = require( 'underscore' );
var tpl = require( '../tpl/main.hbs' );


'use strict';

module.exports = App.View( {

  el: '#main',

  initialize: function () {

    App.views.mainView = this;

  },

  render: function () {

    this.$el.html( tpl() );

  },

  setupElements: function () {

  },

  setupEvents: function () {

  }


} );
