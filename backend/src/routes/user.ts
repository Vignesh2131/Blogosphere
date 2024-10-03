import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {  sign } from "hono/jwt";
type Bindings = {
  DATABASE_URL: string;
  SECRET_KEY: string;
};

export const userRouter = new Hono<{ Bindings: Bindings }>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign({ id: user.id }, c.env.SECRET_KEY);
    return c.json({ token });
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.json({ error: "Invalid signup" });
  }
});


userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) return c.json({ message: "User doesn't exists" });
    const token = await sign({ id: user.id }, c.env.SECRET_KEY);
    return c.json({ token });
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.json({ error: "Invalid signup" });
  }
});