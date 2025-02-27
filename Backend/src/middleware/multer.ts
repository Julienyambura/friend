import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname); // Save file with original name
  },
});

const upload = multer({ storage: storage });

export default upload;
