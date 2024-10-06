import { z } from "zod"

export interface TPost {
  id: number
  title: string
  author: string
  summary: string
  content: string
  category: string
  created_at: string
}

export interface Reactions {
  likes: number
  dislikes: number
}

export interface TPostFilter {
  search?: string
}

export const TAddPostScheme = z.object({
  title: z.string({
    required_error: "Title cant be empty",
  }),
  author: z.string({ required_error: "Author cant be empty" }),
  summary: z.string({
    required_error: "Summary cant be empty",
  }),
  category: z.string({
    required_error: "Category cant be empty",
  }),
  content: z.string({
    required_error: "Content cant be empty",
  }),
})

export type TPostForm = z.infer<typeof TAddPostScheme>

export type TPostFormKeys = keyof TPostForm

export type TPostFormKeysUnion = TPostFormKeys | TPostFormKeys[]
