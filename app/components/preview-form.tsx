import { TPostForm } from "@/types/post"
import React from "react"
import { useFormContext } from "react-hook-form"

const PreviewForm = () => {
  const { getValues } = useFormContext<TPostForm>()

  return (
    <div className="flex flex-col py-4">
      <h5>Title : {getValues("title")}</h5>
      <h5>Author : {getValues("author")}</h5>
      <h5>Summary : {getValues("summary")}</h5>
      <h5>Category : {getValues("category")}</h5>
      <h5>Content : {getValues("content")}</h5>
    </div>
  )
}

export default PreviewForm
