const express=require('express');
const app=express();
app.set("view engine","ejs");
app.set(express.static('./public'));
app.get('/',function(req,res){
    res.send('Hello Abhi')
})

app.get('/profile/me',function(req,res){
res.send("Hello Bhaiyo this is your profile");

})

app.get('/hello',function(req,res){
    res.render('Hello')
})
// app.use(function(req,res,next){
//     // console.log("Hii I am middleware");
//     // res.send("HEY! this is middleware");
//     // console.log(req);
//     next();
// })

app.get('/hii',function(req,res){
    res.send("HELOOOOOOOO");
})

app.get('/profile/:username',function(req,res){
    res.send(`your prifile is ${req.params.username}`);
})

app.get('/contact',function(req,res){
    res.render('contact');
})
app.get('/index',function(req,res){
    res.render('index');
})


app.get("/forFrontEnd",function(req,res){
    res.render('forFrontEnd');
})

app.get('/error',function(req,res,next){
  throw Error("Somthing went Worng!")
})


                    // error Handler
 app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
      }
 res.status(500)
   res.render('error', { error: err })
   })

app.listen(3000);