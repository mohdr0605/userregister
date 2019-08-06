module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      
    // Create a new user
    app.post('/user', user.create);

    // Retrieve all user
    app.get('/user', user.findAll);

    
}