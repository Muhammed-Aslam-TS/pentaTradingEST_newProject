import multer from "multer";

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, 'uploads/');
	},
	filename: (req, file, callback) => {
		callback(null, Date.now() + '' + file.originalname);
	},
});

const upload = multer({
	storage: storage,
	fileFilter: function (req, file, callback) {
		if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
			callback(null, true);
		} else {
			console.log('Only jpg or png files are supported for this upload type');
			callback(null, false);
		}
	},
	limits: {
		fileSize: 2024 * 1024 * 2, // 2MB file size limit
	},
});

export default upload;


// export const upload = multer({ storage: storage });