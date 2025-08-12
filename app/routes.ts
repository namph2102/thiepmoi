import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("blog", "routes/blog/blog.tsx"),
  route("blog/:id", "routes/blog/blog-detail.tsx"),
  route("thiep-moi", "routes/thiep/thiep-moi.tsx"),
] satisfies RouteConfig;
