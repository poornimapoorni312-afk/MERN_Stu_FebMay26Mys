const express = require("express");
const multer = require("multer");

async function main() {
    try {
        const app = express();

        const upload = multer({
            dest: "uploads/"
        });

        app.post("/upload-multiple", (req, res) => {
            upload.array("files", 5)(req, res, (err) => {

                if (err) {
                    if (err instanceof multer.MulterError) {
                        if (err.code === "LIMIT_UNEXPECTED_FILE") {
                            return res.status(400).send("Max 5 files allowed.");
                        }
                        return res.status(400).send(err.message);
                    }
                    return res.status(500).send("Something went wrong.");
                }

                // Success response (outside error block)
                res.send({
                    message: "Files uploaded successfully.",
                    count: req.files.length,
                    files: req.files
                });

            });
        });

        app.listen(3000, () => {
            console.log("Server started at http://localhost:3000");
            console.log("POST /upload-multiple");
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

main();