module.exports = function(app){
    app.get('/' , (req , res)=>{
        res.render('coffee__shop');
    });
    app.get('/buy/' , (req , res)=>{
        res.render('buy');
    });
}