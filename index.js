const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

    const usersCollection = client.db("cookSyDB").collection("users");
    const recipesCollection = client.db("cookSyDB").collection("recipes");

    // Add users to DB
    app.post("/users", async (req, res) => {
      const result = await usersCollection.insertOne(req.body);
      res.send(result);
    });

    // Get all recipes from DB
    app.get("/recipes", async (req, res) => {
      const result = await recipesCollection.find().toArray();
      res.send(result);
    });

    // Get a specific recipe from DB
    app.get("/recipes/:id", async (req, res) => {
      const result = await recipesCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    // Add recipes to DB
    app.post("/recipes", async (req, res) => {
      const result = await recipesCollection.insertOne(req.body);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("CookSy is getting hotter...!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
