import supabase from "@/config/api"
import { TPostForm } from "@/types/post"
import { useMutation } from "@tanstack/react-query"

export const useCreatePost = () => {
  return useMutation({
    mutationKey: ["create-post"],
    mutationFn: async (formData: TPostForm) => {
      const { data } = await supabase.from("blog_posts").insert([formData])
      return data
    },
  })
}
