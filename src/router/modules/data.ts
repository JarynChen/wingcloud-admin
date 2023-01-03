export default {
  path: "/data",
  meta: {
    icon: "mdi:database",
    title: "数据中心"
  },
  children: [
    {
      path: "/data/index",
      name: "Data1",
      component: () => import("@/views/data/index.vue"),
      meta: {
        title: "数据 1"
      }
    },
    {
      path: "/data/index2",
      name: "Data2",
      component: () => import("@/views/data/index.vue"),
      meta: {
        title: "数据 2"
      }
    }
  ]
};
