
import RouteMenus from "./routeMenu";
const routes = [
    {
        path: "/",
        component: () => import("../layouts/layout.js"),
        meta: {
            title: "Layout组件",
        },
        children: [
            {
                path: "/",
                redirect: "/layout/coms",
                hidden: true,
                meta: {
                    title: "重定向",
                },
            },
            ...RouteMenus,
        ],
    },

];

export default routes;
