export default {
  path: "/config",
  meta: {
    icon: "eos-icons:configuration-file-outlined",
    title: "配置中心"
  },
  children: [
    {
      path: "/config/index",
      name: "GrayConfig",
      component: () => import("@/views/config/index.vue"),
      meta: {
        title: "灰色模式"
      }
    },
    {
      path: "/config/index2",
      name: "NoticeConfig",
      component: () => import("@/views/config/index.vue"),
      meta: {
        title: "通知公告"
      }
    },
    {
      path: "/config/index3",
      name: "FunctionConfig",
      component: () => import("@/views/config/index.vue"),
      meta: {
        title: "功能启停"
      }
    }
  ]
};
