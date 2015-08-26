module.exports = function (grunt) {

  grunt.initConfig({
    cucumberjs: {
      options: {
        steps: 'features/step_definitions',
	format: 'html',
        output: 'cucumber_test_results_simple.html',
	theme: 'simple'
      },
      features : []	
    }
  });

  grunt.loadNpmTasks('grunt-cucumberjs');

  //grunt.registerTask('default', ['cucumberjs']);
};