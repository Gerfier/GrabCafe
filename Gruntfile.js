module.exports = function(grunt) {

    //Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),        
        // package configuration   
          cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
					}]
				}
			}     
        });

        //Load plugins
        grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['cssmin']);
    };