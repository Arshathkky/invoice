const User = require('../Model/UserModel')

const getUser = async (req, res) => {
    console.log(req.body); // Log request body to check if it's being parsed correctly
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username, password });
      res.status(200).json({ status: "success", user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
     


module.exports={getUser}