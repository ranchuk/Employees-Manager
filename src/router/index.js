import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../components/Dashboard"),
  },
  {
    path: "/new",
    name: "new-employee",
    component: () =>
      import(
        /* webpackChunkName: "new-employee" */ "../components/NewEmployee"
      ),
  },
  {
    path: "/edit/:employee_id",
    name: "edit-employee",
    component: () =>
      import(
        /* webpackChunkName: "edit-employee" */ "../components/EditEmployee"
      ),
  },
  {
    path: "/:employee_id",
    name: "view-employee",
    component: () =>
      import(
        /* webpackChunkName: "view-employee" */ "../components/ViewEmployee"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
