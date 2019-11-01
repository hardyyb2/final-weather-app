const request = require('request')
const geoCode =(address, callback) =>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/`+encodeURIComponent(address)+`.json?access_token=pk.eyJ1IjoiaGFyZHl5YjIiLCJhIjoiY2swczI0NGpnMDJzOTNvcGI2YW9uNmxrcCJ9.p6ymAgqYnK5yfAPI-kDGkw&limit=1`;
   request({url, json :true} ,(error, {body}={})=>{
       if(error){
           callback(`couldnt connect to web services`)
       }else if(body.features.length===0){
           console.log(`There was some error. Please check the address provided`)
       }else{
           const data={
               latitude : body.features[0].center[1],
               longitude :body.features[0].center[0],
               location:body.features[0].place_name
           }
           callback(undefined, data)              
       }
   })
   }
   
   module.exports = geoCode