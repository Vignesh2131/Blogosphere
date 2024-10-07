import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import {signinInput,signupInput} from "@vignesh2131/medium-validation"
type Bindings = {
  DATABASE_URL: string;
  SECRET_KEY: string;
};

export const userRouter = new Hono<{ Bindings: Bindings }>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const {success, error} = signupInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: error.issues[0] });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
 
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
    c.status(201);
    return c.json({ token ,message:"Registered Successfully"});
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.json({ error: "Sign up has been failed!" });
  }
});


userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success, error} = signinInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error:error.issues[0].message});
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) return c.json({ message: "User doesn't exist! Check the credentials" });
    const token = await sign({ id: user.id }, c.env.SECRET_KEY);
    c.status
    return c.json({ token, message:"Login successful !" });
  } catch (e) {
    c.status(403);
    return c.json({ error: "Login failed" });
  }
});