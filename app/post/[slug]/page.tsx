"use client"
import { Button } from "@/components/ui/button"
import { useGetPostDetail } from "@/hooks/api/get-post-detail"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react"

const Page = ({ params }: { params: { slug: string } }) => {
  const { data, isFetching } = useGetPostDetail(params.slug)

  if (isFetching) {
    return <div>Loading Detail Post....</div>
  }
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-y-4 p-4">
      <div>
        <Link href="/">
          <Button variant="ghost" className="px-0">
            <ArrowLeft /> Back
          </Button>
        </Link>
      </div>
      <h1 className="text-4xl">{data?.title}</h1>
      <p className="text-base">
        {data?.author} | {data?.category}
      </p>
      <h4 className="text-xl">{data?.summary}</h4>
      <h4 className="text-xl">{data?.content}</h4>
    </div>
  )
}

export default Page
