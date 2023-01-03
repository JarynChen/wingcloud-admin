export default {
  path: "/user",
  meta: {
    icon: "clarity:user-line",
    title: "用户中心"
  },
  children: [
    {
      path: "/user/index",
      name: "User1",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "数据 1"
      }
    },
    {
      path: "/user/index2",
      name: "User2",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "数据 2"
      }
    }
  ]
};
