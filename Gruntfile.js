'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('jquery-ui-timepicker-addon.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.
		clean: {
			files: ['dist']
		},
		copy: {
			dist: {
				files: [
					//{ src: 'src/index.html', dest: 'dist/index.html' },
					{ src: 'src/<%= pkg.name %>.css', dest: 'dist/<%= pkg.name %>.css' },
					{ src: 'src/jquery-ui-sliderAccess.js', dest: 'dist/jquery-ui-sliderAccess.js' },
					{ src: 'src/i18n/jquery-ui-timepicker-*.js', dest: 'dist/i18n/', expand:true, flatten: true }
				]
			}
		},
		concat: {	
			dist: {
				options: {
					banner: '<%= banner %>',
					stripBanners: true
				},
				src: ['src/<%= pkg.name %>.js'],
				dest: 'dist/<%= pkg.name %>.js'
			},
			docs: {
				src: [
						'src/docs/header.html',
						'src/docs/intro.html',
						'src/docs/options.html',
						'src/docs/formatting.html',
						'src/docs/i18n.html',
						'src/docs/examples.html',
						'src/docs/footer.html'
					],
				dest: 'dist/index.html'
			}
		},
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		cssmin: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: 'dist/<%= pkg.name %>.css',
				dest: 'dist/<%= pkg.name %>.min.css'
			}
		},
		replace: {
			dist: {
				options: {
					variables: {
						version: '<%= pkg.version %>',
						timestamp: '<%= grunt.template.today("yyyy-mm-dd") %>'
					},
					prefix: '@@'
				},
				files: [
					{ src: 'dist/<%= pkg.name %>.js', dest: 'dist/<%= pkg.name %>.js' },
					{ src: 'dist/<%= pkg.name %>.css', dest: 'dist/<%= pkg.name %>.css' },
					{ src: 'dist/index.html', dest: 'dist/index.html' }
				]
			}
		},
		jasmine: {
			src: 'src/<%= pkg.name %>.js',
			options: {
				specs: 'test/*_spec.js',
				vendor: [
						'http://code.jquery.com/jquery-1.10.1.min.js',
						'http://code.jquery.com/ui/1.10.3/jquery-ui.min.js',
						'http://github.com/searls/jasmine-fixture/releases/1.0.5/1737/jasmine-fixture.js'
					]
			}
		},
		jshint: {
			gruntfile: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: 'Gruntfile.js'
			},
			src: {
				options: {
					jshintrc: 'src/.jshintrc'
				},
				src: ['src/**/*.js']
			},
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/**/*.js']
			}
		},
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			src: {
				files: 'src/**',//'<%= jshint.src.src %>',
				tasks: ['jshint:src', 'jasmine', 'clean', 'copy', 'concat', 'replace', 'uglify', 'cssmin']
				//tasks: ['jshint:src', 'jasmine']
			},
			test: {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test', 'jasmine']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['jshint', 'jasmine', 'clean', 'copy', 'concat', 'replace', 'uglify', 'cssmin']);

};
