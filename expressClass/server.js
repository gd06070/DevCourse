const express = require('express');
const app = express();
const port = 3000
const path = require('path'), async = require('async'), fs =
require('fs')

const users = [
    { name: 'kim', email : 'abc@naver.com' },
    { name : 'lee', email : 'def@naver.com'},
    { name : 'park', email : 'efg@naver.com'},
]
    
app.use(express.static(__dirname + '/public'))
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + 'public', 'index.html'))
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.listen(port, () => {
    console.log(`서버 실행! ${port}`)
})