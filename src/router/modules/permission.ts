export default {
  path: "/permission",
  meta: {
    title: "权限管理",
    icon: "lollipop",
    rank: 10
  },
  children: [
    {
      path: "/permission/index",
      name: "Role",
      component: () => import("@/views/permission/page/index.vue"),
      meta: {
        title: "角色配置"
      }
    },
    {
      path: "/permission/index2",
      name: "Department",
      component: () => import("@/views/permission/page/index.vue"),
      meta: {
        title: "租户配置"
      }
    },
    {
      path: "/permission/index3",
      name: "Permission",
      component: () => import("@/views/permission/page/index.vue"),
      meta: {
        title: "权限配置"
      }
    }
  ]
};
