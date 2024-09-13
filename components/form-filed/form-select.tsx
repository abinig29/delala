"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Control, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type Option } from "@/types/data-table";

type FormSelectProps<T> = {
  name: T;
  label?: string;
  labelHelper?: string;
  placeholder?: string;
  options: Option;
  control: any;
};

export const FormSelect = <T extends string>({
  name,
  label,
  labelHelper,
  placeholder,
  control,
  options,
  ...props
}: FormSelectProps<T>) => {
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{`${label}:`}</FormLabel>}
          {labelHelper && <span className="text-xs"> {labelHelper}</span>}
          <Select
            {...props}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="m@example.com">m@example.com</SelectItem>
              <SelectItem value="m@google.com">m@google.com</SelectItem>
              <SelectItem value="m@support.com">m@support.com</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
