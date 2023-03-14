// import dependancies in the  router files
const express=require("express");
const router=express();
//const bodyParser = require("body-parser");
//const ejs =require('ejs');
//const path = require('path');
const userControllers=require("../controllers/user_controllers");


/*router.use('/uploads', express.static('./uploads'));
router.set("view engine","ejs");
router.set("views", path.join(__dirname, "views"));

//create middlewere
router.use(express.json());
//body parser using
router.use(bodyParser.urlencoded({ extended:false }));
router.use(bodyParser.json());
*/

//import user controllers files here
router.post("/signup",userControllers.User_Signup);
router.post("/login",userControllers.User_Login);
router.get("/user_list",userControllers.User_List);
router.post("/get_user",userControllers.User_Id);
router.post("/delete_user",userControllers.User_Delete);

module.exports=router;