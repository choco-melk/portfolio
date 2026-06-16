import { file, glob } from "astro/loaders"
import { defineCollection } from 'astro:content'
import { z } from "astro/zod"

const projects = defineCollection({
    loader: file("src/projects.json"),
    schema: z.object({
        id: z.number(),
        name: z.string(), 
        image: z.string().optional(),
        "tech-stack": z.array(z.string()),
        description: z.string(),
        "project-link": z.string().optional(),
        "github-link": z.string().optional()
    })
})

// const blogs = defineCollection({
//     loader: glob({ base: "src/blogs/", pattern: "*.md"}),
//     schema: z.object({
//         image: z.string().optional(),
//         date: z.string(),
//         title: z.string(),
//         preview: z.string()
//     })
// })

export const collections = { projects }
