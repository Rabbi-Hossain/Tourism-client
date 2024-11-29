import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),route("login", "./components/login.tsx"),route('register','./components/register.tsx')
    
] satisfies RouteConfig;
