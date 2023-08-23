const express = require('express');
const usersRoute = express.Router();

// Student model
let UsersModel = require('../models/Users');

// Get all data
usersRoute.route('/').get((req, res, next) => {
    UsersModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})
usersRoute.route('/getuser').get((req, res, next) => {
    UsersModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})
usersRoute.route('/checkuser').get(async (req, res, next) => {
   
    UsersModel.find((error, data) => {
    
    var username   =   req.query.username.toString();
    var password   =   req.query.password.toString();
           const filteredData = data.filter((item) => item.username.toLowerCase().includes(username.toLowerCase()) &&  item.password.includes(password));
           
            res.json(filteredData);
        
    })
});



// Create users data
usersRoute.route('/register').post((req, res, next) => {
    UsersModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

usersRoute.route('/loginuser/:id').get((req, res, next) => {
    UsersModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
           console.log('data',data)
            res.json(data);
        }
    })
})


// Edit school data
usersRoute.route('/edit-user/:id').get((req, res, next) => {
    UsersModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update school data
usersRoute.route('/update-user/:id').put((req, res, next) => {
    UsersModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Student successfully updated');
        }
    })
})

// Delete school data
usersRoute.route('/delete-user/:id').delete((req, res, next) => {
    UsersModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = usersRoute;