const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = process.argv.slice(2)[0];

bcrypt.genSalt(function(err,salt){
    bcrypt.hash(password,salt,function(err,hash){
        console.log(hash);
    })
})