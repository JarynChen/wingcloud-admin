export default {
  path: "/sms",
  meta: {
    icon: "material-symbols:sms-outline-rounded",
    title: "短信中心"
  },
  children: [
    {
      path: "/sms/index",
      name: "SendSms",
      component: () => import("@/views/sms/index.vue"),
      meta: {
        title: "发送短信"
      }
    },
    {
      path: "/sms/index2",
      name: "SentSms",
      component: () => import("@/views/sms/index.vue"),
      meta: {
        title: "已发送"
      }
    },
    {
      path: "/sms/index3",
      name: "AbnormalSms",
      component: () => import("@/views/sms/index.vue"),
      meta: {
        title: "异常短信"
      }
    }
  ]
};
