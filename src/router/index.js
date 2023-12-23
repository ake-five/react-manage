import React from "react";
import { useRoutes, Navigate,useNavigate } from "react-router-dom";
import routes from "./routes";
import { Spin } from "antd";
import _ from "lodash";

export default function Routes() {
    const element = useRoutes(renderRoutes(routes));
    return element;
}

function renderRoutes(routes) {
    // const navigate = useNavigate();
    return _.map(routes, (item) => {
      

        let res = { ...item };
        if (!item?.path)
            return {
                path: "/404",
                meta: "404",
            };

        // component
        if (item?.component) {
            const Component = React.lazy(item.component);
            res.element = (
                <React.Suspense fallback={<Spin size="large" />}>
                    <BeforeEach route={item}>
                        <Component />
                    </BeforeEach>
                </React.Suspense>
            );
        }

        // children
        if (item?.children) {
            (res).children = renderRoutes(item.children);
        }

        // 重定向
        if (item?.redirect) {
            res.element = <Navigate to={item.redirect} replace />;
        }

        return res;
    });
}
function BeforeEach(props) {


  return <div style={{ height: "100%" ,overflow:'auto'}}>{props.children}</div>;
}
