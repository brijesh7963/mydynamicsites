//creating schema
const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new error("Invalid email Id");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minlength:3
    },
    date:{
        type:Date,
        default:Date.now

    }
})

//we need a collection
const User=mongoose.model("User",userSchema);
module.exports=User;