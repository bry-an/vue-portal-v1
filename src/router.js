import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ThreadShow from "@/views/ThreadShow";
import PageNotFound from "@/views/PageNotFound";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/thread/:id",
      name: "ThreadShow",
      component: ThreadShow,
      props: true
    },
    {
      path: "*",
      name: "NotFound",
      component: PageNotFound
    },
    // {
    // path: "/about",
    // name: "about",
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
