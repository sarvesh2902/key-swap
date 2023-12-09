import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },

  {
    id: 2,
    title: "Buy",
    newTab: false,
    path: "/buy",
  },
  {
    id: 2.1,
    title: "Sell",
    newTab: false,
    path: "/sell",
  },

  {
    id: 3.1,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "API Grid",
        newTab: false,
        path: "/api",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
];

export default menuData;
