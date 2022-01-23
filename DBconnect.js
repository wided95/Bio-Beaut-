const mongoose=require("mongoose");
const DBconnect=async()=> {
try {
    const result=await mongoose.connect('mongodb+srv://biowebsite:1234@cluster0.cb1v1.mongodb.net/biodatabase?retryWrites=true&w=majority');
    console.log("database is connected");
} catch (error) {
    console.log(error);
    
}
}
module.exports=DBconnect;