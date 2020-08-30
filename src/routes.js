import Home from "./components/Home";
import Portfolio from "./components/protfolio/Portfolio";
import Stocks from "./components/stocks/Stocks";

export const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/portfolio", component: Portfolio },
  { path: "/stocks", component: Stocks }
];
