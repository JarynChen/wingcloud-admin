export default {
  path: "/system",
  meta: {
    icon: "material-symbols:settings-outline-rounded",
    title: "系统设置"
  },
  children: [
    {
      path: "/system/index",
      name: "system1",
      component: () => import("@/views/system/index.vue"),
      meta: {
        title: "数据 1"
      }
    },
    {
      path: "/system/index2",
      name: "system2",
      component: () => import("@/views/system/index.vue"),
      meta: {
        title: "数据 2"
      }
    }
  ]
};
