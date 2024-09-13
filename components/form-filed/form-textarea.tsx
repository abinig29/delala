"use client";

// RHF
import { Control, FieldValues, useFormContext } from "react-hook-form";

// ShadCn
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea, type TextareaProps } from "@/components/ui/textarea";

type FormTextareaProps = {
  name: string;
  label?: string;
  labelHelper?: string;
  placeholder?: string;
  control: any;
} & TextareaProps;

const FormTextarea = ({
  name,
  label,
  labelHelper,
  placeholder,
  control,
  ...props
}: FormTextareaProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{`${label}:`}</FormLabel>}
          {labelHelper && <span className="text-xs"> {labelHelper}</span>}
          <div className="flex items-center justify-between gap-5 text-sm">
            <div>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={placeholder}
                  className="h-0 w-60"
                  {...props}
                />
              </FormControl>
              <FormMessage />
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};

export default FormTextarea;
