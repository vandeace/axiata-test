import supabase from "@/config/api"
import { TPost, TPostForm } from "@/types/post"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["create-post"],
    mutationFn: async (formData: TPostForm) => {
      const { data: insertedData, error: insertError } = await supabase
        .from("blog_posts")
        .insert([formData])
        .select()
        .single()

      if (insertError) throw insertError

      // The inserted data should now be available
      if (!insertedData) throw new Error("Failed to retrieve inserted post")

      return insertedData as TPost
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["get-posts-list"] })
    },
  })
}
