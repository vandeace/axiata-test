"use client"
import InputForm from "@/components/form-input/input"
import { TPostForm } from "@/types/post"
import { useFormContext } from "react-hook-form"

const MetaDataForm = () => {
  const { control } = useFormContext<TPostForm>()
  return (
    <div className="flex flex-col gap-y-4 py-4">
      <InputForm
        control={control}
        name="title"
        label="Title"
        placeholder="Input Post Title"
      />
      <InputForm
        control={control}
        name="author"
        label="Author"
        placeholder="Input Authors Name"
      />
    </div>
  )
}

export default MetaDataForm
