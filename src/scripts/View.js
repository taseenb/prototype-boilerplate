var View = function ( viewObj ) {

  var view = function ( options ) {

    // Set the DOM element of the view:
    // - Either you pass it in the options object in the constructor
    // - Or you set it explicitly in the prototype
    this.$el = $( this.el || options.el );
    this.el = this.$el[0];

    this.options = options;

    // Go
    this.initialize();

  };

  view.prototype = viewObj;

  return view;

};

module.exports = View;