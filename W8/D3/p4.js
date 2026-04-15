// Basics of Embedding and Referncing

const mongoose=require("mongoose");

async function main() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");

        const orderSchema=new mongoose.Schema({
            product:String,
            price:Number
        });
        const userSchema=new mongoose.Schema({
            name:String,
            orders:[orderSchema]  //Embedded document
        });
        const User=mongoose.model('User',userSchema);
        const embeddedUser=await User.create({
            name:"Kavya",
            orders:[
                {product:"Laptop",price:50000},
                {product:"Printer",price:10000},
                {product:"Projector",price:70000}
            ]
        });
        // console.log("User:\n");
        console.log(embeddedUser); //fetch only user data
        // console.log(await User.find()); //fetchs all user model data

        const user=await User.find().lean();
        console.log(JSON.stringify(user,null,2));

        // Referncing 
        const userRefSchema=new mongoose.Schema({
            name:String
        });
        const orderRefSchema=new mongoose.Schema({
            product:String,
            price:Number,
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'UserRef'
            }
        });
        const UserRef=mongoose.model('UserRef',userRefSchema);
        const OrderRef=mongoose.model('OrderRef',orderRefSchema);

        const refUser=await UserRef.create({name:"Kavya"})
        await OrderRef.create([
                {product:"Phone",price:70000,user:refUser._id},
                {product:"Changer",price:2000,user:refUser._id}
            ]);

        console.log("Referenced Order:\n");
        console.log(await OrderRef.find().populate('user'));
    }
    catch(error){
        console.log("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();