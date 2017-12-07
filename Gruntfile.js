module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package-lock.json'),
		concat: {
			dist: {
				src: [
					'public/src/scss/variables.scss',
					'public/src/scss/mixins.scss',
					'public/src/scss/main.scss',
					'public/src/scss/responsive.scss'
				],
				dest: 'public/src/scss/build.scss',
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded',
				},
				files: {
					'public/css/style.css': 'public/src/scss/build.scss'
				}
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ["concat", "sass"]);
};