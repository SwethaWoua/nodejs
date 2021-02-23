module.exports = app => {
    const mongodb = require("../controllers/controller.js");

    var router = require("express").Router();

    router.post("/", mongodb.create);
    router.get("/", mongodb.findAll);
    router.put("/:id", mongodb.update);
    router.delete("/:id", mongodb.delete);

    app.use("/api/mongodb", router);
};
