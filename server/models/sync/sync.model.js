// options.logging : A function that logs sql queries, or false for no logging
// options.force :  If force is true, each Model will run DROP TABLE IF EXISTS, before it tries to create its own table
// options.alter : Alters tables to fit models. Not recommended for production use. Deletes data in columns that were removed or had their type changed in the model.    
var options = { logging: true, force: true, alter: false };
const co = require('co');
exports.syncModels = co.wrap(function* (val) {
  yield model.Video.sync(options).then(() => {
    console.log("--------------Video table Inserted---------------");
  });
  yield model.Video.findAll().then(data => {
    if (data.length == 0) {
      model.Video.create({
        name: "video1.mp4",
        status: true
      });
      model.Video.create({
        name: "video2.mp4",
        status: true
      });
    }
  });
});