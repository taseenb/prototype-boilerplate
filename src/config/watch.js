module.exports = function ( grunt ) {

  var pkg = grunt.file.readJSON( 'package.json' );

  return {

    scripts: {
      files: [pkg.config.srcScripts + '**/*'],
      tasks: ['browserify'],
      options: {
        livereload: pkg.config.livereloadPort
      }
    },

    styles: {
      files: [pkg.config.srcStyles + '**/*'],
      tasks: ['sass:dev'],
      options: {
        livereload: pkg.config.livereloadPort
      }
    }

  };

};