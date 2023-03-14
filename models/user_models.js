// create product model schema
const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
name:{
	type:String,
	required:true,
},
email:{
	type:String,
	required:true,
},
phone:{
	type:String,
	required:true,
},
password:{
	type:String,
	required:true,
},
referral_code:{
	type:String,
	required:false,
}
},{timestamps:true});
module.exports = UserModel= mongoose.model("user",userSchema);