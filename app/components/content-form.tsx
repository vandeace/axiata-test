import TextAreaForm from "@/components/form-input/text-area"
import { TPostForm } from "@/types/post"
import React from "react"
import { useFormContext } from "react-hook-form"

const ContentForm = () => {
  const { control } = useFormContext<TPostForm>()
  return (
    <div className="py-4">
      <TextAreaForm
        control={control}
        name="content"
        label="Content"
        placeholder="Input Content Blog"
      />
    </div>
  )
}

export default ContentForm
