export default {
  path: "/gallery",
  meta: {
    icon: "clarity:image-gallery-line",
    title: "图库中心"
  },
  children: [
    {
      path: "/gallery/index",
      name: "Gallery",
      component: () => import("@/views/gallery/index.vue"),
      meta: {
        title: "图库数据",
        showParent: true
      }
    }
  ]
};
