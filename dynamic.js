const app=require('express')()
app.set("view engine","jade")
app.set("view engine","hbs")
app.get("/home",(req,res)=>{
    res.status(200).render("home",{username:"vamsi katta"})
})
app.get("/hi",(req,res)=>{
    res.status(200).render("index")
})

app.listen(2001,()=>{
    console.log("server start1")
})