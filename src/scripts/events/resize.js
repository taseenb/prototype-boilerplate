var _ = require( 'underscore' );

var Event = function () {

  this.initialize();

};

Event.prototype = {

  initialize: function () {

    this.callback = _.debounce( this.onResize, 100 ).bind( this );

    window.addEventListener( 'resize', this.callback );

    this.$win = $( window );

    this.updateScreenSize();

  },

  updateScreenSize: function () {

    App.width = this.$win.width();
    App.height = this.$win.height();

    console.log( App.width, App.height );
  },

  onResize: function () {

    this.updateScreenSize();

    App.mediator.publish( 'resize', {
      width: App.width, //this.$win.width(),
      height: App.height //this.$win.height()
    } );

  }
};

module.exports = Event;

