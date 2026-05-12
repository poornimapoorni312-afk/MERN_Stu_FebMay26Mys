  //File  upload using Multer:with file type, file size resctriction
  const express = require("express");
const multer = require("multer");

async function main() {
    try {
        const app = express();

        // File filter (check file type)
        const fileFilter = (req, file, callback) => {
            if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
                callback(null, true);
            } else {
                callback(new Error("Only PNG and JPEG allowed"), false);
            }
        };

        // Approach 1: using dest
        const uploadWithDest = multer({
            dest: "uploads/",
            limits: { fileSize: 1024 * 1024 * 2 } // 2MB
        });

        app.post("/upload-dest", uploadWithDest.single("file"), (req, res) => {
            res.send({
                message: "Uploaded using dest approach",
                note: "Filename is random, no extension preserved",
                file: req.file,
            });
        });

        // ✅ Approach 2: using diskStorage
        const storage = multer.diskStorage({
            // Where to store file
            destination: (req, file, callback) => {
                callback(null, "uploads/");
            },
            // How to name file
            filename: (req, file, callback) => {
                callback(null, Date.now() + "-" + file.originalname);
            }
        });

        const uploadWithDisk = multer({
            storage: storage,
            limits: { fileSize: 1024 * 1024 * 2 }, // 2MB
            fileFilter: fileFilter
        });

        app.post("/upload-disk", uploadWithDisk.single("file"), (req, res) => {
            res.send({
                message: "Uploaded using diskStorage approach",
                note: "Filename is controlled and extension preserved",
                file: req.file,
            });
        });

        app.listen(3000, () => {
            console.log("Server started on http://localhost:3000");
            console.log("POST /upload-dest");
            console.log("POST /upload-disk");
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

main();