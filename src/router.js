import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Meta from 'vue-meta'

Vue.use(Router);
Vue.use(Meta)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    name: "accueil",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import( /* webpackChunkName: "about" */ "./views/Contact.vue")
  },
  {
    path: "/resume",
    name: "Mon CV",
    component: () =>
      import( /* webpackChunkName: "about" */ "./views/Resume.vue")
  },
  //    {
  //      path: "/blog",
  //      name: "blog",
  //      component: () =>
  //        import( /* webpackChunkName: "about" */ "./views/Blog.vue")
  //    },
  //    {
  //      path: "/blog/:id",
  //      name: "blogPost",
  //      component: () =>
  //        import( /* webpackChunkName: "about" */ "./views/BlogPost.vue")
  //    },
  //    {
  //      path: "/services",
  //      name: "services",
  //      component: () =>
  //        import( /* webpackChunkName: "about" */ "./views/Services.vue")
  //    },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () =>
      import( /* webpackChunkName: "about" */ "./views/Portfolio/Portfolio.vue")
  },

  {
    path: "/portfolio/stages",
    name: "stagePortfolio",
    component: () =>
      import( /* webpackChunkName: "about" */ "./views/Portfolio/Stages.vue")
  },
  {
    path: "/portfolio/projets",
    name: "projectsPortfolio",
    component: () =>
      import( /* webpackChunkName: "about" */ "./views/Portfolio/Projects.vue")
  },
  {
    path: "/portfolio/laser",
    name: "laser",
    component: () =>
      import( /* webpackChunkName: "about" */ "./views/Portfolio/Laser.vue")
  }, {
    path: "/portfolio/logos",
    name: "logo",
    component: () =>
      import( /* webpackChunkName: "about" */ "./views/Portfolio/Logos.vue")
  },

  {
    path: "*",
    name: "Error",
    component: () =>
      import( /* webpackChunkName: "about" */ "./views/Error.vue")
  }
  ]
});
