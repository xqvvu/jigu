import { createMemoryHistory, createRouter } from "vue-router";

const routes: Parameters<typeof createRouter>[0]["routes"] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("@/views/sign-in/index.vue"),
    meta: {
      auth: false,
    },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, _from) => {
  const authStore = useAuthStore();

  if (to.meta.auth && !authStore.token) {
    return {
      replace: true,
      name: "sign-in",
    };
  }
});

export default router;
