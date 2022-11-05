const mysql = require('mysql')

this.pro = async function(sql){
    let pro = await new Promise((resolve,reject)=>{
        let content = mysql.createConnection({
            host:'localhost',
            user:'admin111',
            password:'admin111',
            database:'system'
        })
        content.connect();
        content.query(sql,(error,result)=>{
            if(error == null){
                resolve(this.success_return(result))
            }else{
                resolve(this.fail_return(error))
            }
            content.end()
        })
    })
    return pro
}

this.success_return = function(data,msg = '请求成功',status = 200){
    return{
        data,
        msg,
        status
    }
}
this.fail_return = function(data,msg = '请求失败',status = 101){
    return{
        data,
        msg,
        status
    }
}