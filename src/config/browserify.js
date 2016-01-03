module.exports = function ( grunt ) {

  var hbsfy = require( 'hbsfy' );
  var svg = require( 'svg-browserify' );
  var pkg = grunt.file.readJSON( 'package.json' );

  return {

    default: {
      options: {
        transform: [hbsfy, svg],
        ignore: ['ipc']
      },
      src: [pkg.config.srcScripts + '**/*.js'],
      dest: pkg.config.dist + 'js/app.js'
    }

  };

};