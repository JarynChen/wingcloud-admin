export default {
  path: "/task",
  meta: {
    icon: "bi:list-task",
    title: "调度中心"
  },
  children: [
    {
      path: "/task/index",
      name: "task1",
      component: () => import("@/views/task/index.vue"),
      meta: {
        title: "数据 1"
      }
    },
    {
      path: "/task/index2",
      name: "task2",
      component: () => import("@/views/task/index.vue"),
      meta: {
        title: "数据 2"
      }
    }
  ]
};
