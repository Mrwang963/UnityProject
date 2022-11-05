const express = require('express')
const async = require('async')
const app = express();
const mysql = require('mysql')
let pro = require('../server/promise/promise')
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

//随机数
function rand(m,n){
    return Math.floor(Math.random() * (n-m)+1) +m;
}
// 随机token
function getToken(){
    let str = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let token = '';
    for(let i = 0;i<20;i++){
        let n = rand(0,str.length-1);
        token += str[n]
    }
    return token
}

app.post('/login',async(req,res)=>{
    let data = req.body;
    res.send(data)
})


app.listen('2000',()=>{
    console.log('启动成功');
})