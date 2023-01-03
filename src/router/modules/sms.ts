export default {
  path: "/sms",
  meta: {
    icon: "material-symbols:sms-outline-rounded",
    title: "短信中心"
  },
  children: [
    {
      path: "/sms/index",
      name: "sms1",
      component: () => import("@/views/sms/index.vue"),
      meta: {
        title: "数据 1"
      }
    },
    {
      path: "/sms/index2",
      name: "sms2",
      component: () => import("@/views/sms/index.vue"),
      meta: {
        title: "数据 2"
      }
    }
  ]
};
