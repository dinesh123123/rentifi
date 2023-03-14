// import dependancies in controllers js files
const User=require("../models/user_models");



// create Register api using post method
const User_Signup=async(req,res)=>{
	
	const {name,email,phone,password,referral_code}=req.body;
    // exist user
	const register_user= await User.findOne({email});
	if(register_user){
	 res.status(400).json({
        result:"false",
        message:"user allready registered, please go to login page..",  
    });

	}else{
		if(name && email && phone && password){

	    try{
            const user = new User({name,email,phone,password,referral_code})
		    const user_data=await user.save()
	        res.status(200).json({
                result:"true",
                message:"user registered sucessfully..",data:user_data});
	    }catch(error){
	        res.status(400).json({result:"false",
                message:"user does not register please try again.."
            })
        }
    }else{
		res.status(400).json({
            result:"false",
            message:"parameter required name, email, phone, password "
        });
	}
}
};







//create mobile number otp during login time
 const User_Login =async(req,res)=>{
 	const {email,password} =req.body;

    try{
 		if(email && password){
 			const user = await User.findOne({email:email,password:password});
 			if(user != null){
 			    res.status(200).json({
                    result:"true",message:'user sucessfully login..'
                });
            }else{
                res.status(400).json({
                    result:"false",message:'please enter correct email & password..'
                });
            }
        }else{
           res.status(400).json({
            result:"false",
            message:'parameter required email & password..'
        });	
        }        
 	}catch(error){
 	    console.log(error.message)
 	}
};





const User_List =async(req,res)=>{
 	try{
        const user_data = await User.find({});
 			if(user_data != null){
 			    res.status(200).send({result:'true',msg:'data successfully get..',data:user_data});
            }else{
                res.send({success:'false',message:'record not found..'});
            }
                
 	}catch(error){
 	    console.log(error.message)
 	}
}; 	

const User_Id =async(req,res)=>{

	  const {_id} =req.body;
	  if(_id == null){
            res.send({success:'false',message:'parameter required _id..'});
        }
 	try{
        const user_data = await User.findOne({_id:_id});
 			if(user_data != null){
 			    res.status(200).send({result:'true',msg:'data successfully get..',data:user_data});
            }else{
                res.send({success:'false',message:'record not found..'});
            }    
 	}catch(error){
 	    console.log(error.message)
 	}
};

const User_Delete =async(req,res)=>{

	  const {_id} =req.body;
	  if(_id == null){
            res.send({success:'false',message:'parameter required _id..'});
        }
 	try{
        const user = await User.findOne({_id:_id});
        
 			if(user != null){
 				const user_data=await user.deleteOne()
 			    res.status(200).send({result:'true',msg:'user successfully deleted..'});
            }else{
                res.send({success:'false',message:'record not found..'});
            }    
 	}catch(error){
 	    console.log(error.message)
 	}
};


module.exports ={
User_Signup,
User_Login,
User_List,
User_Id,
User_Delete
};