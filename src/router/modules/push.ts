export default {
  path: "/push",
  meta: {
    icon: "material-symbols:circle-notifications-outline",
    title: "推送平台"
  },
  children: [
    {
      path: "/push/index",
      name: "push1",
      component: () => import("@/views/push/index.vue"),
      meta: {
        title: "数据 1"
      }
    },
    {
      path: "/push/index2",
      name: "push2",
      component: () => import("@/views/push/index.vue"),
      meta: {
        title: "数据 2"
      }
    }
  ]
};
