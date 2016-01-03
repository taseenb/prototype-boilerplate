module.exports = function ( grunt ) {

  var pkg = grunt.file.readJSON( 'package.json' );

  return {

    options: {
      port: pkg.config.port,
      hostname: '*',
      livereload: pkg.config.livereloadPort,
      base: pkg.config.dist
    },

    middleware: function ( connect, options, middlewares ) {
      // inject a custom middleware http://stackoverflow.com/a/24508523
      middlewares.unshift( function ( req, res, next ) {
        res.setHeader( 'Access-Control-Allow-Origin', '*' );
        res.setHeader( 'Access-Control-Allow-Methods', '*' );
        return next();
      } );
      return middlewares;
    }
    //}

  };

};