import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { InputHTMLAttributes } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

interface TInputSelectForm extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  control: any
  name: string
  description?: string
  placeholder?: string
  option: {
    label: string
    value: string
  }[]
}
export default function InputSelectForm({
  label,
  control,
  name,
  description,
  placeholder,
  option,
}: TInputSelectForm) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {option.map((item, index) => (
                <SelectItem value={item.value} key={index}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
