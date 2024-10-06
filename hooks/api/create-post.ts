import supabase from "@/config/api"
import { TPostForm } from "@/types/post"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["create-post"],
    mutationFn: async (formData: TPostForm) => {
      const { data } = await supabase.from("blog_posts").insert([formData])
      return data
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["get-posts-list"] })
    },
  })
}
