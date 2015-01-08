// Gruntfile.js
module.exports = function(grunt) {
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'+"\n"
      },
      default: {
        files: {
          'js/rrssb.min.js': ['js/rrssb.js']
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 20', 'ie 9']
      },
      default: {
        src: 'css/rrssb.css',
        dest: 'css/rrssb.css'
      }
    },
    sass: {
      default: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          bundleExec: true,
          require: [
            'bourbon'
          ]
        },
        files: {
          'css/demo.css': 'scss/demo.scss',
          'css/rrssb.css': 'scss/rrssb.scss'
        }
      }
    },
    svgstore: {
      options: {
        prefix: 'icon-', // This will prefix each ID
        cleanup: false
      },
      default: {
        files: {
          'img/icons.svg': ['img/icons/*.svg']
        }
      }

    },
  });

  grunt.registerTask('default', ['uglify', 'svgstore', 'sass', 'autoprefixer']);
}
