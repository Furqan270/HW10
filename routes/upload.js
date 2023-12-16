const multer = require('multer')
const file_type = {
    'image/png': 'png',
    'image/jpg' :'jpg',
    'image/jpeg' :'jpeg',
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // The destination is a directory where the uploaded files will be saved.
       const isValidformat = file_type [file.mimetype]
       let uploadError = new Error("Invalid Format File")
       if(isValidformat){
        uploadError = null
       }
        cb(uploadError, './public/uploads');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-')
        const extension = file_type[file.mimetype]
    // The filename of the uplaoded file. You can append here any other data to the name or use another method to generate it.

      const uniqueFile = fileName + Date.now() + '.' + extension
      cb(null, uniqueFile)
    }
  })
  
exports.upload = multer({ storage: storage })