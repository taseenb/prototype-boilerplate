module.exports = function ( grunt ) {

  var pkg = grunt.file.readJSON( 'package.json' );

  return {

    dev: {
      files: [{
        src: pkg.config.srcStyles + 'main.scss',
        dest: pkg.config.dist + 'css/main.css'
      }],
      options: {
        sourceMap: true
      }
    },

    prod: {
      files: [{
        src: pkg.config.srcStyles + 'main.scss',
        dest: pkg.config.dist + 'css/main.css'
      }],
      options: {
        sourceMap: false,
        outputStyle: 'compressed'
      }
    }

  };

};