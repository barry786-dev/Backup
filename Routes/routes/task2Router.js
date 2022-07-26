const express = require('express');
const task2router = express.Router();

task2router.get('/', (req, res) => {
  res.send('this is programing skils');
});
task2router.get('/js',(req,res)=>{
    res.send('this is js')
})
task2router.get('/csharp', (req, res) => {
  res.send('this is csharp');
});
task2router.get('/c-plus', (req, res) => {
  res.send('this is c plus');
});
task2router.get('/python', (req, res) => {
  res.send('this is python');
});

module.exports = task2router;
