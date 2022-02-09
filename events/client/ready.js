const mongoose = require('mongoose');
const { mongokey } = require('../../config')


module.exports = (client, Discord) =>{
    console.log(`bot zalogował się poprawnie!`);

    mongoose.connect(mongokey, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('Połączono z bazą danych!');
    })
    .catch((err) => {
        console.log(err);
    })
};
