const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static('public'))

app.get('/', (req,res) => {
    const data = {message:'hello world'}
    res.render('index', {
        data,
        people: [
            {name : 'Bae'},
            {name : 'Kim'},
            {name : 'Park'},
        ]
    });
})
app.listen(8000, () => {
    console.log('서버변경 http://localhost:8000')
})