export default {
  path: "/data",
  meta: {
    icon: "mdi:database",
    title: "数据中心"
  },
  children: [
    {
      path: "/data/index",
      name: "Airline",
      component: () => import("@/views/data/index.vue"),
      meta: {
        title: "航司数据"
      }
    },
    {
      path: "/data/index2",
      name: "Manufacturer",
      component: () => import("@/views/data/index.vue"),
      meta: {
        title: "制造商数据"
      }
    },
    {
      path: "/data/index3",
      name: "Aircraft",
      component: () => import("@/views/data/index.vue"),
      meta: {
        title: "航空器数据"
      }
    }
  ]
};
