const express = require ('express');

const app = express();

const timer = require('./middleware/functions')
app.use(timer) 
                //app.use declare  middleware function as
                //hight level middleware it will be used globally
const port = 7000;
app.listen(port, ()=>{
    console.log(`Running server on port:${port}`)
});

// send files(to the browser home/contact/services)

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname+'/public/home.html')
// });

// app.get('/contact', (req,res)=>{
//     res.sendFile(__dirname+'/public/contact.html')
// });

// app.get('/services', (req,res)=>{
//     res.sendFile(__dirname+'/public/services.html')
// });

// // send css file 
// app.get('/css/style.css', (req,res)=>{
//     res.sendFile(__dirname+'/public/css/style.css')
// })

app.use(express.static(__dirname + '/public'))

// app.use(express.static(__dirname + '/public')) make import 
//all static file from public folder 