// const {document_categories} = require("../../../data.js");
// const {upload} = require("../utils/storageManager.js");

// const multerMiddleware = async (req, res, next) => {
//     let upload;
//     const id = req.body.id;
//     const data = await document_categories.findOne(id);

//     (data.storage === "public") ? upload = publicStorage : upload = privateStorage;

//     upload.single("image")(req, res, next);
// }

// module.exports = multerMiddleware;