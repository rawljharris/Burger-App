//import burgers "model"
const burgers = require("../models/burgers");

module.exports = app => {
    //get all brugers
    app.get("/api/burgers", function (req, res) {
      burgers.findAll()
        .then(burgers_db => res.json(burgers_db))
        .catch(err => {
          console.log(err);
          res.json(err);
        });

    });
    //create/ post a new burger
    app.post("/api/burgers", function (req, res) {
      //pass req.body into create method
      //req.body => 
      burgers.create(req.body)
        .then(burgers_db => res.json(burgers_db))
        .catch(err => {
          console.log(err);
          res.json(err);
        });
    });
    // get a burger by id
    app.get("/api/burgers/:id", function (req, res) {
      burgers.findById(req.params.id)
        .then(burgers_db => res.json(burgers_db))
        .catch(err => {
          console.log(err);
          res.json(err);
        });
    });
    //PUT/update a burger;s devoured to true or false by id
    app.put("/api/burgers/:id", function (req, res) {
      //req.body => {devoured}: true || {devoured: false}
      burgers.update(req.body.devoured, req.params.id)
        .then(burgers_db => res.json(burgers_db))
        .catch(err => {
          console.log(err);
          res.json(err);
        });
    });

    app.delete("/api/burgers/:id", function (req, res) {
      //req.body => {devoured}: true || {devoured: false}
      burgers.remove(req.params.id)
        .then(burgers_db => res.json(burgers_db))
        .catch(err => {
          console.log(err);
          res.json(err);
        });
    });
    //delete a burger bu its id
    // app.delete("/api/burgers/:id", function(req, res){
    //   burgers.remove(req.params.id)
    //   .then(burgers_db => res.json(burgers_db))
    //   .catch(err => {
    //     console.log(err);
    //     res.json(err);
    //   });
    // });
  }