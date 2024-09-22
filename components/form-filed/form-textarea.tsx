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
          {label && <FormLabel className="text-muted-foreground">{`${label}`}</FormLabel>}
          {labelHelper && <span className="text-xs"> {labelHelper}</span>}
          <div className="flex items-center justify-between gap-5 text-sm w-full ">
            <div className="w-full ">
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={placeholder}
                  className="w-full"
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
