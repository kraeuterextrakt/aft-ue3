module.exports = function(grunt) {

    grunt.initConfig({
        // concat: {
        //     dist: {
        //         // src: ['node_modules/bootstrap/dist/js/bootstrap.bundle.js'],
        //         src: [
        //             // 'node_modules/popper.js/dist/popper.min.js',
        //             // 'node_modules/bootstrap/js/dist/dist/util.js',
        //             'node_modules/bootstrap/js/dist/base-component.js',
        //             // 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
        //             'node_modules/bootstrap/js/dist/dom/*.js',
        //             'node_modules/bootstrap/js/dist/carousel.js',
        //         ],
        //         dest: 'public/main.js',
        //     },
        // },
        watch: {
            files: ['**/*.scss'],
            tasks: ['sass']
        },
        sass: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    'public/main.css': 'scss/main.scss'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/main.min.js': ['js/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass']);

};