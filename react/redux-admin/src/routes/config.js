export default {
  menus: [ // 菜单相关路由
    { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
    {
      key: '/app/table', title: '表格', icon: 'copy',
      subs: [
          { key: '/app/table/basicTable', title: '基础表格', component: 'BasicTable'},
          { key: '/app/table/advancedTable', title: '高级表格', component: 'AdvancedTable'},
      ],
    },
  ],
  others: []
}