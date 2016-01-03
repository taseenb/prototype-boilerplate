module.exports = function ( grunt ) {

  "use strict";

  var config = {
    pkg: grunt.file.readJSON( 'package.json' ),
    browserify: require( './browserify' )( grunt ),
    connect: require( './connect' )( grunt ),
    watch: require( './watch' )( grunt ),
    sass: require( './sass' )( grunt ),
    uglify: require( './uglify' )( grunt )
  };

  return config;
};