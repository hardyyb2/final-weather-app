//importing modules and packages
const express = require(`express`)
const geoCode = require(`./utils/geocode`)
const foreCast = require(`./utils/forecast`)
const hbs = require(`hbs`)
const path = require(`path`)
//util functions and assignments
const app = express();
console.log(__dirname)
const pathDirectory = path.join(__dirname , `../public`)
const viewsPath = path.join(__dirname,`../templates/views` )
const partialsPath = path.join(__dirname, `../templates/partials`)
const port = process.env.PORT || 3000;
app.use(express.static(pathDirectory));
app.set(`view engine`, `hbs`);
app.set(`views`,viewsPath)
hbs.registerPartials(partialsPath)
//handling request for these pages
app.get(``,(req, res)=>{
    res.render(`index`)
})
app.get(`/about`,(req, res)=>{
    res.render(`about2`)
})
app.get(`/help`,(req, res)=>{
    res.send(`this is help page`)
})
app.get(`/weather`,(req, res)=>{
 if(!req.query.address){
     return res.send({
         error:`error occurred. Please provide address`
     })
 } 
    
geoCode(req.query.address, (error, {latitude, longitude, location}={})=>{
    if(error)
   return  res.send(error);
   
    foreCast(latitude,longitude,(error, forecastData)=>{
        if(error) return res.send(error)
         return res.send({
             location:location, 
             forecastData:forecastData
         })
    })
    
})
})
app.get(`/weather2`,(req, res)=>{
    res.render(`weather2`);
})

app.get(`/yourcity`, (req, res)=>{
    res.render(`yourcity`);
})

app.get(`*`,(req,res)=>{
    res.render(`404`)
})
//starting sever at 3000 port
app.listen(port,()=>{
    console.log(`listening to port 3000...`)
});



