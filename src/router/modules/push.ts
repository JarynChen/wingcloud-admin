export default {
  path: "/push",
  meta: {
    icon: "material-symbols:circle-notifications-outline",
    title: "推送平台"
  },
  children: [
    {
      path: "/push/index",
      name: "PushData",
      component: () => import("@/views/push/index.vue"),
      meta: {
        title: "推送数据"
      }
    },
    {
      path: "/push/index2",
      name: "NewPush",
      component: () => import("@/views/push/index.vue"),
      meta: {
        title: "新建推送"
      }
    }
  ]
};
