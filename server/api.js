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
    let token = getToken()
    let data = req.body;
    let sql = `select * from user where UserName = '${data.username}'`
    let result = await pro.pro(sql);
    if(result.status == 200){
        if(result.data.length == 0){
            res.send(pro.fail_return('账号不存在'))
        }else{
            sql = `select * from user where UserName = '${data.username}' and PassWord = '${data.password}'`
            result = await pro.pro(sql);
            if(result.data.length == 0){
                res.send(pro.fail_return('密码错误'))
            }else{
                res.send(pro.success_return(result.data[0],'登陆成功'))
            }
        }
    }else{
        res.send(result)
    }
})


app.listen('2000',()=>{
    console.log('启动成功');
})