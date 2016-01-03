var Event = function ( el ) {

  //console.log( el );

  this.el = el ? el : document;
  this.pointerX = 0;
  this.pointerY = 0;

  this.initialize();

};

Event.prototype = {

  initialize: function () {

    // Touch
    this.el.addEventListener( 'touchstart', this.onDocumentTouchStart.bind( this ), false );
    this.el.addEventListener( 'touchmove', this.onDocumentTouchMove.bind( this ), false );

    // Mouse
    this.mouseMoveCallback = this.onDocumentMouseMove.bind( this );
    this.el.addEventListener( 'mousedown', this.onMouseDown.bind( this ), false );
    this.el.addEventListener( 'mouseup', this.onMouseUp.bind( this ), false );
  },

  onMouseDown: function ( e ) {
    this.el.addEventListener( 'mousemove', this.mouseMoveCallback, false );
  },

  onMouseUp: function ( e ) {
    this.el.removeEventListener( 'mousemove', this.mouseMoveCallback, false );
  },

  onDocumentTouchStart: function ( event ) {
    if ( event.touches.length === 1 ) {
      event.preventDefault();
      this.pointerX = event.touches[0].pageX;
      this.pointerY = event.touches[0].pageY;
    }
  },

  onDocumentTouchMove: function ( event ) {
    if ( event.touches.length === 1 ) {
      event.preventDefault();
      this.pointerX = event.touches[0].pageX;
      this.pointerY = event.touches[0].pageY;
    }

    this.onPointerMove();
  },

  onDocumentMouseMove: function () {
    this.pointerX = event.clientX;
    this.pointerY = event.clientY;

    this.onPointerMove();
  },

  onPointerMove: function () {
    App.mediator.publish( 'pointer', {
      x: this.pointerX,
      y: this.pointerY
    } );
  }

};

module.exports = Event;

