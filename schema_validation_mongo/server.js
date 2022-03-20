const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { isEmail } = require('validator');
mongoose.connect('mongodb://localhost:27017/bookstore', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to MongoDb...`);
  }
});
// creat Schema for users
//minlength: value=> [10, `Email has only ${value.length} character`]
//I apologize , the way which I past it earlier to check the length inside schecma is not really working , the result was tricky , please avoid it if you watched it before, I apologize again /*minlength: value=> [10, `Email has only ${value.length} character`]*/ wrong do not try it
const users_Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //minlength: [10, (value) => `Email has only ${value.length} character`],
      minlength: [
        10,
        'Email must be at least 10 characters,' +
          'your email contains only: ' +
          '{VALUE}'.length +
          ' characters',
      ],
      maxlength: [50, 'Email must be less than 50 characteres'],
      validate: [isEmail, 'invalid email'],
      /* validate: [
        (email) => {
          const EmailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return EmailRegEx.test(email);
        },
        'Please fill a valid email address',
      ], */
    },
    password: { type: String, required: true },
    age: {
      type: Number,
      required: true,
      min: [18, 'must e more than 18'],
      max: [50, 'must be less than 50'], // custom validator even numbers only work
      validate: {
        validator: (n) => {
          if (n % 2 === 0) {
            return true;
          } else {
            return false;
          }
        },
        message: 'Age must be even only!',
      },
    },

    active: Boolean,
    address: {
      /*
        Required
        country : string, min: 5, max:20, required
        city:  string, min: 5, max:20, required
        zipCode : number, 5 digits, required
        */
      country: {
        type: String,
        required: true,
        minlength: [5, 'Country must be more than 5'],
        maxlength: [20, 'Country must be less than 20'],
      },
      city: {
        type: String,
        required: true,
        minlength: [5, 'city must be more than 5'],
        maxlength: [20, 'city must be less than 20'],
      },
      zipCode: {
        type: Number,
        required: true,
        // max 99999, min 10000
        validate: {
          validator: (zc) => {
            return zc >= 10000 && zc <= 99999;
          },
          message: 'zipCode must be 5 digits',
        },
      },
    },
  },
  { collection: 'users' }
);
// define the model for users
const users_model = mongoose.model('users', users_Schema);
// insert user
let user_1 = {
  name: 'John',
  email: 'aaaaaa',
  password: 12346,
  age: 26,
  active: true,
  address: {
    country: 'Germany',
    city: 'Hamburg',
    zipCode: 22222,
  },
};
users_model.create(user_1, (error, result) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(result);
  }
});
// looking for some data
/* users_model.find({name: 'Mostafa'}).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
}) */

//update : name , email, zipCode for one document
/* users_model.updateOne(
  { email: 'aaa@aaaa.aaa' },
  {
    $set: { name: 'Edit_Name', email: 'zzz@zzz.zzz', 'address.zipCode': 99001 },
  },
  { runValidators: true },
  (error, result) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(result);
    }
  }
); */
