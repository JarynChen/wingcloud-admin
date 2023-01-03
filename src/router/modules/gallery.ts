export default {
  path: "/gallery",
  meta: {
    icon: "clarity:image-gallery-line",
    title: "图库中心"
  },
  children: [
    {
      path: "/gallery/index",
      name: "gallery1",
      component: () => import("@/views/gallery/index.vue"),
      meta: {
        title: "数据 1"
      }
    },
    {
      path: "/gallery/index2",
      name: "gallery2",
      component: () => import("@/views/gallery/index.vue"),
      meta: {
        title: "数据 2"
      }
    }
  ]
};
