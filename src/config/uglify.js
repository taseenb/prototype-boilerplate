module.exports = function ( grunt ) {

  return {
    options: {
      compress: {
        drop_console: true
      }
    },
    prod: {
      files: {
        './dist/js/app.js': ['./dist/js/app.js']
      }
    }
  };

};
