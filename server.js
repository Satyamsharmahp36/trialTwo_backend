const express = require('express');
const app = express();
const port_1 = 1300;
// const port_2 = 1301

// define express apps that run on port_1 and port_2
let app1, app2

app1= express()

// app2= express()

app1.get("/",(req,res)=>{
  res.send("APP ONE")
})

// app2.get("/",(req,res)=>{
//   res.send("APP TWO")
// })

if (require.main === module) {
  // add the listen for the express app
  app1.listen(port_1,()=>{
    console.log("app1")
  })

  // app2.listen(port_2,()=>{
  //   console.log("app2")
  // })
}

module.exports = {
  app1,
  app2
};
