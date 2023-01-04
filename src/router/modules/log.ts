export default {
  path: "/log",
  meta: {
    icon: "uit:blogger-alt",
    title: "日志中心"
  },
  children: [
    {
      path: "/log/index",
      name: "SystemLog",
      component: () => import("@/views/log/index.vue"),
      meta: {
        title: "系统访问日志"
      }
    },
    {
      path: "/log/index2",
      name: "AdminLog",
      component: () => import("@/views/log/index.vue"),
      meta: {
        title: "管理平台操作日志"
      }
    }
  ]
};
