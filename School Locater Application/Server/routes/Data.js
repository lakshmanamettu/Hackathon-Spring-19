module.exports = function (app, db) {
    console.log('gamedata');
    let gamedata_model = db.model('game_data');
    app.get('/feedback/fetch', (req, res) => {
        let searchtext = req.query.category;
        console.log(searchtext);
        gamedata_model.find({ age: "12"},(err, game) => {
            if (!err) { 
                res.send({
                    result: "Success",
                    data: game,
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