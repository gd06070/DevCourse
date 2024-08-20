const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser');
const cors = require('cors');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended : true }))
app.use(bodyParser());
// app.use(cors());
app.use(expressLayouts);
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];
app.post('/addTask', (req,res) => {
    const newTask = req.body.newTask;
    if(newTask) {
        tasks.push(newTask);
    }
    res.redirect('/')
})

app.post('/deleteTask', (req,res) = {
    const deleteTask = req.body.task;
    tasks 
    
    res.redirect('/');
})

app.get('/', (req,res) => {
    const data = {message:'hello world'}
    res.render('index', {
        tasks:tasks,
        data,
        people: [
            {name : 'Bae'},
            {name : 'Kim'},
            {name : 'Park'},
        ]
    });
})
app.get('/about', (req,res) => {
    res.render('about')
})
app.listen(8000, () => {
    console.log('서버변경 http://localhost:8000')
})