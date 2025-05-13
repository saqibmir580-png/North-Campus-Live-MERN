const mongoose = require("mongoose");
const dbConnection = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  if(connection){
    console.log("MongoDB is connected successfully");
    
  }
  return
};
module.exports=dbConnection