const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
         useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.MONGO_URL, connectionParams);
        console.log("Connected to database successfully");
    }catch(error){
console.log(error);
console.log("Not connected to db");
    }
}
// const { MongoClient } = require('mongodb');

// async function main() {
//     const uri = "mongodb+srv://Manas-H:<password>@cluster0.anniuyy.mongodb.net/test";

//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     }finally{
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     })
// }