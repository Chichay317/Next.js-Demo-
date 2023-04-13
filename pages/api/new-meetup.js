// api/new-meetup
import { MongoClient } from "mongodb";

// the req object is for incoming requests while the res object is for sending back a response.
// connect returns a promise you have to await
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://CodeDeev:Chichay317@cluster0.mqk4lzr.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db(); //allows us to get hold of the database we are connecting

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "MEETUP INSERTED!" });
  }
}

export default handler;
