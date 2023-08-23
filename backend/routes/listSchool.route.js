const express = require('express');
const listSchoolRoute = express.Router();

// Student model
let listSchoolModel = require('../models/listSchool');

// Get all data
listSchoolRoute.route('/').get((req, res, next) => {
    listSchoolModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create school data
listSchoolRoute.route('/listSchool-register').post((req, res, next) => {
    listSchoolModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit school data
listSchoolRoute.route('/edit-listSchool/:id').get((req, res, next) => {
    listSchoolModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update school data
listSchoolRoute.route('/update-listSchool/:id').put((req, res, next) => {
    listSchoolModel.findByIdAndUpdate(req.params.id, {
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
listSchoolRoute.route('/delete-listSchool/:id').delete((req, res, next) => {
    listSchoolModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = listSchoolRoute;