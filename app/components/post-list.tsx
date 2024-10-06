"use client"
import { useGetPostList } from "@/hooks/api/get-post-list"
import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PaginationPostList from "./pagination"
import useMutableSearchParams from "@/hooks/utils/param"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const PostList = () => {
  const searchParam = useMutableSearchParams()

  const { data, isFetching } = useGetPostList({
    limit: 10,
    page: !!searchParam.get("page") ? Number(searchParam.get("page")) : 1,
  })

  if (isFetching) {
    return <div>Loading Post...</div>
  }

  return (
    <>
      <div className="mt-4 flex flex-1 flex-col gap-4">
        {data?.data.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.summary}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start justify-start gap-y-4">
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>{post.author}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
              <Badge variant="outline">{post.category}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
      <PaginationPostList lastPage={data?.totalPages ?? 0} />
    </>
  )
}

export default PostList
