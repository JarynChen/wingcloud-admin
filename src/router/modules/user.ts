export default {
  path: "/user",
  meta: {
    icon: "clarity:user-line",
    title: "用户中心"
  },
  children: [
    {
      path: "/user/index",
      name: "UserCenter",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "用户中心"
      }
    },
    {
      path: "/user/index2",
      name: "UserOperation",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "用户操作"
      }
    }
  ]
};
