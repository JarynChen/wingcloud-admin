export default {
  path: "/weather",
  meta: {
    icon: "mdi:weather-cloudy",
    title: "天气中心"
  },
  children: [
    {
      path: "/weather/index",
      name: "AirportWeather",
      component: () => import("@/views/weather/index.vue"),
      meta: {
        title: "机场天气数据",
        showParent: true
      }
    }
  ]
};
