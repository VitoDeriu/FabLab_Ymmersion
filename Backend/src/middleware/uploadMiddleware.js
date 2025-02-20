const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Dossier où les fichiers seront stockés
    },
    filename: (req, file, cb) => {
        //génère un nom unique : timestamp + extension
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

// accepter seulement les .stl peut etre a modifier pour accepter d'autres fichiers
const fileFilter = (req, file, cb) => {

    const allowedTypes = ["application/sla", "model/stl"];
    
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Seuls les fichiers STL sont autorisés !"), false);
    }
};



//defini la taille max du fichier dans limits
const upload = multer({
    storage: storage,
    fileFilter: fileFilter, 
    limits: { fileSize: 5 * 1024 *1024} //5MB
})



module.exports = upload
