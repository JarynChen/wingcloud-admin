export default {
  path: "/audit",
  meta: {
    icon: "ant-design:audit-outlined",
    title: "审核平台"
  },
  children: [
    {
      path: "/audit/index",
      name: "AuditAll",
      component: () => import("@/views/audit/index.vue"),
      meta: {
        title: "所有审核"
      }
    },
    {
      path: "/audit/index2",
      name: "ReportAll",
      component: () => import("@/views/audit/index.vue"),
      meta: {
        title: "所有举报"
      }
    },
    {
      path: "/audit/index3",
      name: "ToAudit",
      component: () => import("@/views/audit/index.vue"),
      meta: {
        title: "待审核"
      }
    },
    {
      path: "/audit/index4",
      name: "ToReport",
      component: () => import("@/views/audit/index.vue"),
      meta: {
        title: "待举报"
      }
    }
  ]
};
