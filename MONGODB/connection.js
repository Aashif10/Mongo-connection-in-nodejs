//! MONGODB CONNECTION
// ? first step install(npm install mongodb) and import mongodb
const mongodb = require("mongodb").MongoClient;
const URL = "mongodb://localhost:27017";

const connectDB = async () => {
  try {
    let client = await mongodb.connect(URL)
    // ^ Database creation
    let database = client.db("Football");
    console.log("Database is created");
    // ^ Collection creation
    let collection = await database.createCollection("Data");

    // Uncomment and await insertMany if you want to insert data
     await collection.insertMany([{
       name:"Mithelesh kumar",age :44
    }
      
    ]);
   //   await collection.createIndex({name:1},{unique:true})
    // ! Fething Single Data from Database
   //  let data = await collection.findOne({ name: "Ronaldo" });
   //   console.log(data);
     //   ! Updating Data 
   //   await collection.updateOne({ age: 33 }, { $set: { name: "Salman khan" } });
   //   console.log("updated data")

     //   ! Deleting Data 
     await collection.deleteOne({ name: "Sharukh khan" })
     console.log("Data deleted")
  } catch (error) {
    console.log(error);
  }
};

connectDB();

