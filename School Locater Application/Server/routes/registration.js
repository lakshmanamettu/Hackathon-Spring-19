module.exports = function (app, db) {
    console.log('registration');
    let registration_details = db.model('registration');

    app.post('/user/create',(req,res) => {
        let user = req.body;
        let user_details = new registration_details({
            user_name: user.email,
            first_name: user.firstName,
            last_name: user.lastName,
            password: user.password,
            gender:user.gender,
            age:user.age
        });
        user_details.save((err, registration) => {
            if (!err) {
                res.send({
                    result: "Success",
                    message: "Registration is successful !"
                });
            } else {
                res.send({
                    result: "Failure",
                    message: "Error in creating UserDetails",
                    error: err
                });
            }
        })
    });
    app.get('/user/fetch',(req,res) => {
        let userName = req.query.userName;
        registration_details.find({user_name:userName}).exec((err, registration) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: registration,
                });
            } else {
                res.send({
                    result: "Failure",
                    message: "Error in creating UserDetails",
                    error: err
                });
            }
        })
    });
};