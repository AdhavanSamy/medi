import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/LoginPage.vue";
import Dashboard from "../views/Dashboard.vue";
import Stockview from "../views/StockView.vue";
import BillEntry from "../views/BillEntry.vue";
import StockEntry from "../views/StockEntry.vue";
import AddUserr from "../views/AddUser.vue";
import Loginhistory from "../views/LoginHistory.vue";
import Salesreport from "../views/SalesReport.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Stockview",
    name: "Stockview",
    component: Stockview,
  },
  {
    path: "/BillEntry",
    name: "BillEntry",
    component: BillEntry,
  },
  {
    path: "/StockEntry",
    name: "StockEntry",
    component: StockEntry,
  },
  {
    path: "/AddUserr",
    name: "AddUserr",
    component: AddUserr,
  },
  {
    path: "/Loginhistory",
    name: "Loginhistory",
    component: Loginhistory,
  },
  {
    path: "/Salesreport",
    name: "Salesreport",
    component: Salesreport,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
