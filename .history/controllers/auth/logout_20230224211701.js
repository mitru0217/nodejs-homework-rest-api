const {User} = require("../../models");


const logout = async (req, res)=> {
    const{_id} =req.user;
    await.User.findByIdAndUpdate(_id, {token:null});

}




module.exports = logout