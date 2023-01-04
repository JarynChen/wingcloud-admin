export default {
  path: "/recommend",
  meta: {
    icon: "material-symbols:recommend-outline",
    title: "推荐平台"
  },
  children: [
    {
      path: "/recommend/index",
      name: "IndexRecommend",
      component: () => import("@/views/recommend/index.vue"),
      meta: {
        title: "首页推荐",
        showParent: true
      }
    }
  ]
};
