<template>
    <div class="box">
        <div class="login">
            <div class="top">
                商户后台管理系统
            </div>
            <div class="form">
                <el-input id="input1"
                    placeholder="请输入账号"
                    prefix-icon="el-icon-user"
                    v-model="input1">
                </el-input>
                <el-input id="input2"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-unlock"
                    v-model="input2">
                </el-input>
                <div id="login">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="primary">重置</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                input1:'',
                input2:''
            }
        },
        methods: {
            login(){
                if(!this.input1){
                    this.$message({
                        message:'账号不能为空',
                        type:'warning'
                    })
                    return
                }else if(!this.input2){
                    this.$message({
                        message:'密码不能为空',
                        type:'warning'
                    })
                    return
                }
                let obj = {username:this.input1,password:this.input2}
                axios.post('/api/login',obj).then(res=>{
                    console.log(res.data);
                })
                // localStorage.setItem('user',JSON.stringify(user))
                // this.$router.push('/')
            }
        },
    }
</script>

<style lang="less" scoped>
    .box{
        width: 100%;
        height: 100%;
        background: url(../assets/bg.png) no-repeat;
        background-size: 100% 100%;
        .login{
            width: 475px;
            height: 265px;
            padding-top: 70px;
            background-color: rgba(255, 255, 255, .3);
            margin: 0 auto;
            transform: translateY(50%);
            position: relative;
            .top{
                background-color: #35b0d1;
                // display: inline-block;
                padding: 10px 45px;
                box-sizing: border-box;
                position: absolute;
                left: 50%;
                top: -5%;
                transform: translateX(-50%);
                font-size: 18px;
                color: #fff;
            }
            .form{
                width: 300px;
                margin: 0 auto;
                .el-input /deep/ input{
                    width: 300px;
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 15px;
                   
                }
                .el-input   /deep/ .el-input__prefix{
                    display: inline-block ;
                    height: 40px;
                }
                #login{
                    display: flex;
                    justify-content: space-between;
                    button{
                        width: 50%;
                    }
                }
            }
        }
    }
</style>