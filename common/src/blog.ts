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

export type BlogInput = z.infer<typeof blogInput>
export type BlogUpdateInput = z.infer<typeof blogUpdateInput>

