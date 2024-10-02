import { Hono } from "hono";


type Bindings = {
  DATABASE_URL: string;
  SECRET_KEY: string;
};
export const blogRouter = new Hono();


blogRouter.use("/*", (c, next) => {
    next();
})

blogRouter.post("/", (c) => {
  return c.text("blog post");
});

blogRouter.put("/", (c) => {
  return c.text("blog put");
});
blogRouter.get("/:id", (c) => {
  return c.text("Blog id get");
});
blogRouter.get("/bulk", (c) => {
  return c.text("All blogs");
});