module.exports = mongoose => {
    var mongoose = require('mongoose');
    var schema = mongoose.Schema(
        {
            name: String,
            email: String,
            mobile: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const {  _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const model = mongoose.model("woua_employee", schema);
    return model;
};
