import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {  verify } from "hono/jwt";
import {blogInput, blogUpdateInput} from "@vignesh2131/medium-validation"
type Bindings = {
  DATABASE_URL: string;
  SECRET_KEY: string;
};

export const blogRouter = new Hono<{ Bindings:Bindings, Variables:{userId:string} }>();


blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization")||"";
  const user = await verify(authHeader, c.env.SECRET_KEY);
  if (user) {
    c.set('userId', user.id);
    await next();
  } else {
    c.status(402)
    return c.json({
      message:"You are not logged in"
    })
  }
})

blogRouter.post("/post", async (c) => {
  const body = await c.req.json();
  const { success,error } = blogInput.safeParse(body);
  if (!success) {
    c.status(402);
    return c.json({error:error.issues[0].message,field:error.issues[0].path[0]})
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  const userId =await c.get("userId");
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId:userId 
    },
  })
  return c.json({id:blog.id,message:"Blog posted!"})
});

blogRouter.put("/update", async (c) => {
  const body = await c.req.json();
  const { success,error } = blogUpdateInput.safeParse(body);
    if (!success) {
      c.status(402);
     return c.json({
       error: error.issues[0].message,
       field: error.issues[0].path[0],
     });
  }
 const prisma = new PrismaClient({
   datasourceUrl: c.env.DATABASE_URL,
 }).$extends(withAccelerate());
  
   const userId = c.get("userId");
  const blog = await prisma.blog.update({
    where: {
     id:body.id,
   },
   data: {
     title: body.title,
     content: body.content,
     authorId: userId,
   },
 });
 return c.json({ id: blog.id });
});
//pagination
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blogs =await prisma.blog.findMany();
  return c.json({blogs})
});

blogRouter.get("/:id", async (c) => {
 const prisma = new PrismaClient({
   datasourceUrl: c.env.DATABASE_URL,
 }).$extends(withAccelerate());
  const id = await c.req.param("id");
  try {
     const blog = await prisma.blog.findFirst({
       where: {
         id: id,
       },
     });
     return c.json({ id: blog });
  } catch (error) {
    c.status(411);
    return c.json({
      error:"Error while fetching blog post"
    })
  }

});
