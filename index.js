const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://mongodb/test');

const kittySchema = mongoose.Schema({
   name: String
});

kittySchema.methods.speak = function () {
   var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
   console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

app.get('/create', (req, res) => {
   const fluffy = new Kitten({ name: 'fluffy' });

   fluffy.save(function (err, fluffy) {
      if (err) return console.error(err);
      fluffy.speak();
   });
   res.send(fluffy.speak())
})

app.get('/', (req, res) => {
   Kitten.find(function (err, kittens) {
      if (err) return console.error(err);
      res.send(kittens)
   })
})

app.listen(3000);