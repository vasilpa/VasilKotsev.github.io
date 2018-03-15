module.exports = function(grunt) {

    // Configure main projects
    grunt.initConfig({

        // basic setting and info about the Grunt pluggins
        pkg: grunt.file.readJSON('package.json'),

        //name of pluggins (without of "grunt-contrib-"):

        //SASS compiling
        sass: {
            dist: {
                files: {
                    'styles/styles.css' : 'styles/styles.scss'
                }
            }
        },

        //HTML minimize
        htmlmin: {                                     // Task 
            dist: {                                      // Target 
                options: {                                 // Target options 
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files 
                    'index.min.html': 'index.html'   // 'destination': 'source' 
                }
            },
        },

        //CSS minimize
        cssmin: {

            // Minify all contents of a release directory and add a .min.css extension
            target: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['*.css', '!*.min.css'],
                    dest: 'styles',
                    ext: '.min.css'
                }]
            }

            // //combine all css files in one css file
            // options: {
            //     mergeIntoShorthands: false,
            //     roundingPrecision: -1
            // },
            // target: {
            //     files: {
            //         'styles/main.min.css': ['styles/reset.css', 'styles/styles.css']
            //     }
            // }

        },

        // Javascript minimize

        uglify: {
            dist: {   
                files: {
                    'js/script.min.js': ['js/script.js']
                }
            }

        }

    });

    //Load pluggins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Do the task
    grunt.registerTask('default', ['sass','htmlmin', 'cssmin', 'uglify']) 
    

};