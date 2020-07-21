const mongoose = require('mongoose')
//require('mongodb')
const validator = require ('validator')
const { model } = require('mongoose')
const { __esModule } = require('validator/lib/isAlpha')

const User = mongoose.model('User', {
      
    name: {

           type: String,
           required: true,
           trim: true
         },

    password: {
                type:String,
                required: true,
                minlength: 7,
                validate(value){
                if(value.toLowerCase().includes('password')){
                           throw new Error("Password can not contain 'password'")
               }
          }

    },

    email: {
              type: String,
              required: true,
              trim:true,
              validate(value){
                 if(!validator.isEmail(value)){
                      throw new Error (' Email is invalid ')
            }
        }


    },

    age: {
             type:Number,
             default: 0
         }

})

// const user = new User({
//     name: '  innocent ',
//     age: 23,
//     email: "innocent@gmail.com",
//     password: " leokid!!$123 "
// })

// user.save().then(()=>{
//     console.log(user)

// }).catch((e)=>{
//     console.log("Error!", e)
// })

module.exports = User