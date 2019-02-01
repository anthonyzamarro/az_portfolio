'use string';

module.exports = function(grunt) {
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [
				{
					name: 'medium',
					width: 300,
					height: 150,
					suffix: '_3x',
					quality: 40
				},
	          {
	            name: 'large',
	            width: 1024,
	            height: 1024,
	            suffix: '_4x',
	            quality: 60
	          }
          ]
		},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png,svg}'],
					cwd: 'images_src/',
					dest: 'images/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);
};
