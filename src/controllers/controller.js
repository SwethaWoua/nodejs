const db = require("../app");
const Controller = db.controller;


exports.create = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const controller = new Controller({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    });
    console.log("values###", controller)
    controller.save(controller)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the WouaEmployee."
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Controller.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving WouaEmployee."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const name = req.params.name;
console.log("name",name)
    Controller.findByIdAndUpdate(name, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update WouaEmployee with name=${name}. Maybe WouaEmployee was not found!`
                });
            } else res.send({ message: "WouaEmployee was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating WouaEmployee with name=" + name
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Controller.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete WouaEmployee with id=${id}. Maybe WouaEmployee was not found!`
                });
            } else {
                res.send({
                    message: "WouaEmployee was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete WouaEmployee with id=" + id
            });
        });
};
