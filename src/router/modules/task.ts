export default {
  path: "/task",
  meta: {
    icon: "bi:list-task",
    title: "调度中心"
  },
  children: [
    {
      path: "/task/index",
      name: "TimeTask",
      component: () => import("@/views/task/index.vue"),
      meta: {
        title: "定时任务"
      }
    },
    {
      path: "/task/index2",
      name: "HistoryTask",
      component: () => import("@/views/task/index.vue"),
      meta: {
        title: "历史任务"
      }
    }
  ]
};
