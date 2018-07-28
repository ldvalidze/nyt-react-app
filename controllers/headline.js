const db = require('../models');

// exports.displayAllHeadlines = function (req, res) {
//   // Grab every document in the Articles collection
//   db.Headline.find({})
//     .then(function (dbHeadline) {
//       // If we were able to successfully find Articles, send them back to the client
//       res.json(dbHeadline);
//     })
//     .catch(function (err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// };

exports.displaySavedHeadlines = function (req, res) {
  db.Headline.find({})
    .then(function (dbHeadline) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbHeadline);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};

// exports.clearHeadlines = function (req, res) {
//   // Grab every document in the Articles collection
//   db.Headline.deleteMany({})
//     .catch(function (err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });

//   db.Note.deleteMany({}).catch(function (err) {
//     // If an error occurred, send it to the client
//     res.json(err);
//   });
// };

exports.displayOneHeadline = function (req, res) {
  db.Headline.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .populate("note")
    .then(function (dbHeadline) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbHeadline);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};

exports.saveHeadline = function (req, res) {
  console.log("THIS IS REQ BODY: " + JSON.stringify(req.body));
  db.Headline.create(req.body)
    .then(function (dbHeadline) {
      // View the added result in the console
      console.log(dbHeadline);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      console.log('DIDNT POST');
      return res.json(err);

    });
};

exports.deleteHeadline = function (req, res) {
  console.log('deleteHeadline req.body :' + req.params.id);
  db.Headline.deleteOne({_id: req.params.id})
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });

  // db.Note.deleteMany({}).catch(function (err) {
  //   // If an error occurred, send it to the client
  //   res.json(err);
  // });
};