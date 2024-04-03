const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT||3000;
const dotenv=require('dotenv');
dotenv.config();

//get request
app.get('/ping',(req,res)=>{
    res.send("Pong")

})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
