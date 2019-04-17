// eslint-disable-next-line func-names
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    run: {
      server: {
        cmd: 'nodemon',
        args: ['server/index.js']
      },
    },

    aws: grunt.file.readJSON('awss3.json'),

    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
      },
      dist: {
        options: {
          bucket: 'fec-details-module',
          signatureVersion: 'v4',
          region: 'us-east-2',
        },
        files: [
          {
            expand: true,
            cwd: 'public/',
            src: ['**.css'],
            dest: '/',
          },
        ],
      },
    },

  });

  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask('deployProxy', 'aws_s3:dist');
  grunt.registerTask('server', ['run:server']);

};
