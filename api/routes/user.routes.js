const express=require("express");

const router=express.Router();

const userController=require("../controllers/user.controller");

router.route("/adduser").post(userController.userRegistraion);

router.route("/users").get(userController.getAllUsers);

router.route("/user/:id").get(userController.getSpecificUser);

router.route("/user/edit/:id").put(userController.editUser);

router.route("/delete/user/:id").delete(userController.deleteUser);

module.exports=router;