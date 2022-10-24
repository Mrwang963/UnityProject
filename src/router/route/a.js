let arr = [{
    path: '/ele/ele1',
    name: 'ele1',
    meta: {
        tit: 'ELE组件1',
        icon: 'el-icon-eleme'
    },
    component: () =>
        import ('@/views/Ele1.vue')
},
{
    path: '/ele/ele2',
    name: 'ele2',
    meta: {
        tit: 'ELE组件2',
        icon: 'el-icon-picture-outline-round'
    },
    component: () =>
        import ('@/views/Ele2.vue')
},
{
    path: '/ele/ele3',
    name: 'ele3',
    meta: {
        tit: 'ELE组件3',
        icon: 'el-icon-upload'
    },
    component: () =>
        import ('@/views/Ele3.vue')
},
{
    path: '/ele/ele4',
    name: 'ele4',
    meta: {
        tit: 'ELE组件4',
        icon: 'el-icon-s-tools'
    },
    component: () =>
        import ('@/views/Ele4.vue')
},
{
    path: '/ele/ele5',
    name: 'ele5',
    meta: {
        tit: 'ELE组件5',
        icon: 'el-icon-s-order'
    },
    component: () =>
        import ('@/views/Ele5.vue')
}
];
// 导出路由配置
export default [{
path: '/ele',
name: 'ele',
component: () =>
    import ('@/views/Ele.vue'),
meta: {
    tit: 'ELE组件',
    icon: 'el-icon-s-fold'
},
children: arr
}];