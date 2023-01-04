export default {
  path: "/shot",
  meta: {
    icon: "ic:outline-screenshot",
    title: "拍机助手"
  },
  children: [
    {
      path: "/shot/index",
      name: "Monitor",
      component: () => import("@/views/shot/index.vue"),
      meta: {
        title: "航空器监控中心",
        showParent: true
      }
    }
  ]
};
