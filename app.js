const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');
//load in the mongoose modules
const {Employee} = require('./db/employee');

//load middleware
const i = 0;
app.use(bodyParser.json());
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.get('/', (req, res) => {        
    //return array of all the lists in the database
    Employee.find({}).then((lists) => {
        res.send(lists);
        
    })
    
});

app.post('/', (req, res) => {
    //create a new list and return the new list document  

     let name = req.body.name;
     let date = req.body.date;
        let basic = req.body.basic;
        let hra = req.body.hra;
        let da = req.body.da;
        let ta = req.body.ta;
       
        
    let newList = new Employee({        
        name,
        date,
        basic,
        hra,
        da,
        ta,
        
        
    });
    newList.save().then((employeeDoc) => {
        //the full list document is returned
        res.send(employeeDoc);
    })
});
 
app.delete('/:id', (req, res) => {
    //delete the specified list (list document with id in the URL)
    Employee.findOneAndRemove({
        _id: req.params.id
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    })
});
 
app.listen(3000, () => {
    console.log('Server started on port 3000');
});