const connection = require("../config/connection");

// create a function that reads from the burgers table
const findAll = () => {
  // create a new promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', function(err,burgers_db ){
      if (err) {
        // this will throw a .catch function
        return reject(err);
      }
      //this will throw a .then function
      return resolve(burgers_db);
    });
  });
};
//find a burger by id
// select * from id where id=?
//create new promise
const findById = burgerId => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function(err, burgers_db){
      if (err) {
        //this will throw to a .catch
        return reject(burgers_db)
      }
      return resolve
    });
  });
};
//create/ insert
//inser into burgers set ? ({name: burgerName})
const create = burgerDataObj => {
  return new Promise((resolve, reject) => {

    connection.query('INSERT INTO burgers set ?', [burgerDataObj], function(err, burgers_db){
      if (err) {
        return reject(err)
      }
      return resolve(burgers_db);
    });
  });
};

//update burgers (set value of devoured) to true or false
// update burgers set devoured = ? where id = ? ([true, 2)
const update = (devouredValue, burgersId) => {
  return new Promise((resolve, reject) => {
    //set devoured to boolean true/false
    devouredValue = (devouredValue === "true")
    ? true : false;

    connection.query("UPDATE burgers SET DEVOURED = ? WHERE ID = ?", [devouredValue, burgersId], function (err, burgers_db){
      if (err) {
        return reject(err);
      }
      else if (burgers_db.changedRows === 0) {
        return reject({message: "wrong ID"});
      }
      else {
        return resolve(burgers_db);
      }
    })
  })
}
// export all of our new functions as a methods pd an objects // flag remove
module.exports = {
  findAll,
  findById,
  create,
  update
}