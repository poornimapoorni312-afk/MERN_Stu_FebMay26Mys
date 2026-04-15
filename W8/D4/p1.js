// Date fundamentals

const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");

        const userSchema = new mongoose.Schema({
            name: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        });

        const Model = mongoose.models.DateFund || mongoose.model("DateFund", userSchema);
        await Model.deleteMany();

        const doc = await Model.create({
            name: "Test"
        });

        console.log("Document:", doc);

    } catch (err) {
        console.log("Error:", err.message);
    } finally {
        await mongoose.disconnect();
        console.log("DB disconnected");
    }
}

main();