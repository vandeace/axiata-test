"use client"
import InputForm from "@/components/form-input/input"
import InputSelectForm from "@/components/form-input/select"
import { TPostForm } from "@/types/post"
import { useFormContext } from "react-hook-form"

const categoryOption = [
  { label: "Business", value: "Business" },
  { label: "Lifestyle", value: "Lifestyle" },
  { label: "Personal", value: "Personal" },
]

const CategorySummaryForm = () => {
  const { control } = useFormContext<TPostForm>()
  return (
    <div className="flex flex-col gap-y-4 py-4">
      <InputForm
        control={control}
        name="summary"
        label="Summary"
        placeholder="Input Post Summary"
      />
      <InputSelectForm
        option={categoryOption}
        control={control}
        name="category"
        label="Category"
        placeholder="Input Post Category"
      />
    </div>
  )
}

export default CategorySummaryForm
