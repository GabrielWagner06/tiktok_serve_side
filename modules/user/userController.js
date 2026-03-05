
const User = require('./userModel');
const bcrypt = require('bcryptjs'); // aqui pode ser que seja so bcrypt

exports.register = async (req, res) => {
    
        const { username, email, password, confirmPassword, fullName } = req.body;
        console.log("Dados do formulário:", username, email);
}
     