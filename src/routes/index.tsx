
import Auth from "~/wrapper/Auth";
import loadable from "../utils/loadable";

const Home = loadable(() => import("~/pages/home"));

export const ROUTES = {
  Home: "/",
};

const routes = [
  {
    exact: true,
    path: ROUTES.Home,
    component: Home,
    layout: Auth,
    isAuth: true,
  },
]

export default routes;