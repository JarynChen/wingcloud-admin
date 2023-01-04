export default {
  path: "/system",
  meta: {
    icon: "material-symbols:settings-outline-rounded",
    title: "系统设置",
    rank: 999
  },
  children: [
    {
      path: "/system/index",
      name: "AdminIndex",
      component: () => import("@/views/system/index.vue"),
      meta: {
        title: "管理平台用户管理",
        showParent: true
      }
    }
  ]
};
