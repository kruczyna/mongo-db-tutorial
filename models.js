var mongoose = require("mongoose");
require('dotenv').config()

const Schema = mongoose.Schema;


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => console.log("were on!"))
  .catch(err => console.log(err));

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number
});

const Person = mongoose.model("Person", personSchema);
