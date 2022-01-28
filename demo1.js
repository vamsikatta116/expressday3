const app=require("express")()
const bodypar=require("body-parser")
app.use(bodypar.json())

const loggerMw=(req,res,next)=>{
    console.log(req.method)
    console.log(req.url)
    console.log(new Date().toDateString())
    next()
}

app.get("/home",(req,res)=>{
    res.send({prname:"xyz",price:"12000"})
})
app.get("/vamsi",(req,res)=>{
    res.send(req.body)
    console.log("this is successful")
})


app.get("/macha/:name/:number",(req,res)=>{
    res.send(req.params.name)
    console.log("successful")
})

app.all("*",(req,res)=>{
    res.status(404).send("file not found")
})

app.listen(3002,()=>{
    console.log("server started2")
})
