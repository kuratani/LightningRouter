var gulp = require("gulp");
var zip = require("gulp-zip");
var source = require("vinyl-source-stream");
var through2 = require("through2");
var jsforce = require("jsforce");

var forceDeploy = function(username, password) {
  return through2.obj(function(file, enc, callback) {
    var conn;
    conn = new jsforce.Connection();
    return conn.login(username, password).then(function() {
      return conn.metadata.deploy(file.contents).complete({
        details: true
      });
    })
    .then(function(res) {
      if (res.details !== null && !res.success){
        console.error(res);
        return callback(new Error('Deploy failed.'));
      }
      return callback();
    }, function(err) {
      console.error(err);
      return callback(err);
    });
  });
};

gulp.task("deploy", function() {
  return gulp.src("src/**/*", {
    base: "."
  }).pipe(zip('pkg.zip')).pipe(forceDeploy(process.env.SF_USERNAME, process.env.SF_PASSWORD));
});

gulp.task("watch", function() {
  gulp.watch("src/**/*", ["deploy"]);
});

gulp.task("default", ["deploy"]);
