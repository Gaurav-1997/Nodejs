const express = require('express');
const app = express();
let {people} = require('./data');
const morgan = require('morgan');

//static assets
app.use(express.static('./methods-public'));

//parse form data
app.use(express.urlencoded({ extended:false }));
//parse json
app.use(express.json());

app.get('/api/people',(req, res)=>{
    res.status(200).json({success:true, data:people});
});


app.post('/api/people', (req, res)=>{
    const {name} = req.body;
    if(!name)
    {
        return res.status(400).json({success:false, msg:'pls provide name'});
    }
    res.status(201).json({success:true, person:name});
});

app.post('/login', (req, res)=>{
    const {name}=req.body;
    if(name)
    {
        return res.status(200).send(`welcome ${name}`);
    }

    res.status(401).send('Please provide name');
})
app.listen(5000, ()=>{
    console.log("server is listening on port 5000...");
});
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen


