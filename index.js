const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sniekdho.hx1c6qw.mongodb.net/?retryWrites=true&w=majority&appName=Sniekdho`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("CookSy is getting hotter...!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
