module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package-lock.json'),
		sass: {
			dist: {
				options: {
					style: 'expanded',
				},
				files: {
					'public/css/style.css': 'public/src/scss/main.scss',
				}
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ["sass"]);
};