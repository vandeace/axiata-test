import supabase from "@/config/api"
import { TPost } from "@/types/post"
import { useQuery } from "@tanstack/react-query"

export const useGetPostDetail = (id: string) => {
  return useQuery<TPost>({
    queryKey: ["get-posts-list", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single()

      if (error) {
        console.error("Error fetching post:", error)
        return null
      }

      return data
    },
  })
}
