import supabase from "@/config/api"
import { TPost, TPostFilter } from "@/types/post"
import { TPaginatedRequest, TResponse } from "@/types/response"
import { useQuery } from "@tanstack/react-query"

export const useGetPostList = (params: TPaginatedRequest<TPostFilter>) => {
  return useQuery<TResponse<TPost>>({
    queryKey: ["get-posts-list", params],
    queryFn: async () => {
      const start = (params.page - 1) * params.limit
      const end = start + params.limit - 1

      let builder = supabase
        .from("blog_posts")
        .select("*", { count: "exact" })
        .range(start, end)

      if (!!params.filter?.search) {
        builder = builder.or(`title.ilike.%${params.filter.search}%`)
      }

      const { data, error, count } = await builder

      if (error) {
        console.error("Error fetching data:", error)
        return { data: [], count: 0, currentPage: params.page, totalPages: 0 }
      }

      return {
        data: data,
        count: count,
        currentPage: params.page,
        totalPages: Math.ceil((count ?? 0) / params.limit),
      } as TResponse<TPost>
    },
  })
}
