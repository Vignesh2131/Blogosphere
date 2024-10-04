import z from "zod";

export const blogInput = z.object({
    title: z.string().min(10),
    content:z.string().min(50)
})

export const blogUpdateInput = z.object({
    id:z.string(),
    title: z.string().min(10),
    content:z.string().min(50)
})

export const signupInput = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type BlogInput = z.infer<typeof blogInput>
export type BlogUpdateInput = z.infer<typeof blogUpdateInput>

