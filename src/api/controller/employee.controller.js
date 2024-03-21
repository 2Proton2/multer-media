const employeeController = {
    uploadController : async (req, res) => {
        try {
            console.log("controller bhai =>  ", req.body);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = employeeController;