const multer = require("multer");
const {document_categories} = require("../../../data.js");

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        const {storage} = await document_categories.findOne(req.body.id);
        const path = (storage === "public") ? "./public/img" : "./private/img"
        cb(null, path)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname + '-' + uniqueSuffix)
    }
});

exports.upload = multer({storage})