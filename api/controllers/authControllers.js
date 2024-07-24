const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authControllers = {
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = await new User({
        username: req.body.username,
        password: hashed,
        email: req.body.email,
        address: req.body.address,
      });
      const user = await newUser.save();
      return res.status(200).json(user);
    } catch {
      return res.status(500).json({ message: "Request Failed" });
    }
  },

  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json("Wrongg Email!!!!!!!!!  ");
      }
      const validPass = await bcrypt.compare(req.body.password, user.password);
      if (user && validPass) {
        const accesstoken = jwt.sign(
          {
            id: user.id,
          },
          process.env.JWT_ACEESS_TOKEN,
          { expiresIn: "365d" }
        );
        const { password, ...others } = user._doc;
        return res.status(200).json({ ...others, accesstoken });
      }
    } catch {
      return res.status(500).json({ message: "Request Failed" });
    }
  },

  getUser: async(req, res)=>{
    try{
      const user= await User.findById(req.params.id);
      if(!user){
        return res.status(404).json("Not Find User");
      }
      else{
        res.status(200).json(user);
      }
    }
    catch{
      return res.status(500).json({message:"Request Failed"});
    }
  },

  updateUser: async(req, res)=>{
    const id=req.params.id;
    try{
      const user=await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
      res.status(200).json(user);
    }
    catch{
      return res.status(500).json({message:"Request Failed"});
    }
  }
};

module.exports = authControllers;
