const User = require('../models/user.model.js');

// Create and Save a new User

exports.create = (req, res) => {
    // Validate request
    // if(!req.body.fullname) {
    //     return res.status(400).send({
    //         message: "User fullname can not be empty"
    //     });
    // }

    // Create a User
    const user = new User({
        fullname: req.body.fullname, 
        mobile: req.body.mobile,
        password: req.body.password
    });

    // Save User in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

