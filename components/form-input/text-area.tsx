import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputHTMLAttributes } from "react";
import { Textarea } from "../ui/textarea";

interface TTextAreaForm extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  control: any;
  name: string;
  description?: string;
  placeholder?: string;
}
export default function TextAreaForm({
  label,
  control,
  name,
  description,
  placeholder,
}: TTextAreaForm) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea placeholder={placeholder} className="resize-none" {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
