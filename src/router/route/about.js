export default [
    {
        path:'/about',
        name:'about',
        meta:{
            tit:'关于我们',
            icon:'el-icon-user'
        },
        component:()=>import ('@/views/AboutView.vue')
    }
]