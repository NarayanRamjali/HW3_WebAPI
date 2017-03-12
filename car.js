/**
 * Created by NarayanRamjali on 2/21/17.
 */
'use strict';
// Include our "car_db"
//var car_db = require('../../config/car_db')();
// Exports all the functions to perform on the car_db
module.exports = {
    getAll : getAll,
    save : save,
    getOne : getOne,
    update : update,
    delMovie : delMovie
};

//GET /car operationId
function getAll(req, res, next) {
    res.json( "hello");
}

//POST /car operationId
function save(req, res, next) {
    res.json({success: car_db.save(req.body), description: "Car added to the list!"});
}

//GET /car/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var car = car_db.find(id);
    if(movie) {
        res.json(car);
    }else {
        res.status(204).send();
    }
}

//PUT /car/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var movie = req.body;
    if(car_db.update(id, movie)){
        res.json({success: 1, description: "Car updated!"});
    }else{
        res.status(204).send();
    }

}
//DELETE /car/{id} operationId
function delMovie(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "Car deleted!"});
    }else{
        res.status(204).send();
    }
}