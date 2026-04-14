// Pre-save and Post-save hooks
const mongoose = require("mongoose");

async function runSaveHookDemo() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");
        console.log("MongoDB connected successfully");

        const articleSchema = new mongoose.Schema({
            title: String,
            category: String,
            tag: String
        });

        //  Pre-save hook
        articleSchema.pre("save", function () {
            this.title = this.title.trim();
            console.log("Pre-save hook: title normalized before save");
        });

        //  Post-save hook
        articleSchema.post("save", function (doc) {
            console.log("Post-save hook: document saved with title:", doc.title);
        });

        const Article = mongoose.models.HookArticle ||
            mongoose.model("HookArticle", articleSchema);

        const article = new Article({
            title: "     Understanding Hooks in mongoose   ",
            category: "database",
            tag: "save-hook-demo"
        });

        await article.save();

    } catch (error) {
        console.log("Save hook demo error:", error);
    } finally {
        mongoose.connection.close();
    }
}
runSaveHookDemo();