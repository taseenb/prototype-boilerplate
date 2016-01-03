module.exports = function ( grunt ) {

  "use strict";

  // Init configuration
  var config = require( './src/config/get-config.js' )( grunt );
  grunt.initConfig( config );

  // Load tasks
  grunt.loadNpmTasks( 'grunt-browserify' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );


  // Register tasks
  grunt.registerTask( 'compile-dev', ['sass:dev', 'browserify'] );
  grunt.registerTask( 'compile-prod', ['sass:prod', 'browserify', 'uglify'] );

  // Compile tasks (prod + dev)
  grunt.registerTask( 'prod', ['compile-prod'] );
  grunt.registerTask( 'default', ['compile-dev', 'connect', 'watch'] );

};