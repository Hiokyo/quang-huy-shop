
import Auth from "~/wrapper/Auth";
import loadable from "../utils/loadable";

const Home = loadable(() => import("~/pages/home"));
const Iphone = loadable(() => import("~/pages/iphone"));
const Ipad = loadable(() => import("~/pages/ipad"));

export const ROUTES = {
  Home: "/",
  Iphone: "/iphone",
  Ipad: "/ipad",
};

const routes = [
  {
    exact: true,
    path: ROUTES.Home,
    component: Home,
    layout: Auth,
    isAuth: true,
  },
  {
    exact: true,
    path: ROUTES.Iphone,
    component: Iphone,
    layout: Auth,
    isAuth: true,
  },
  {
    exact: true,
    path: ROUTES.Ipad,
    component: Ipad,
    layout: Auth,
    isAuth: true,
  },
]

export default routes;