import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Main from "../pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import PostPageCompositionAPI from "@/pages/PostPageCompositionAPI.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/composition",
    component: PostPageCompositionAPI,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
