// import our cats model
const burgers = require("../models/burgers");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function(req, res) {

    // use burger.findAll
    burgers
      .findAll()
      // if we get to resolve()
      .then(burgerdata => {
        res.render("index", {burgers: burgerdata})
      })
      // if we get to reject()
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}