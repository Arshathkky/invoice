const User = require('../Model/UserModel')

const getUser = async (req, res) => {
    
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username,password });
      console.log(username)
      if(!user){
        console.log("fail")
        return res.status(404).json({status:"fail"});
      }
      res.status(200).json({status: "success",user });
      console.log("success")

    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
     


module.exports={getUser}