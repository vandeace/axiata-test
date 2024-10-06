import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";

interface TInputForm extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  control: any;
  name: string;
  description?: string;
  type?: string;
  placeholder?: string;
}
export default function InputForm({
  label,
  control,
  name,
  description,
  type = "text",
  placeholder,
}: TInputForm) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...field} type={type} placeholder={placeholder} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
