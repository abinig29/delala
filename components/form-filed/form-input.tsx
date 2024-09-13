"use client";

// RHF

// ShadCn
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, type InputProps } from "@/components/ui/input";
import { Skeleton } from "../ui/skeleton";

type FormInputProps<T> = {
  name: T;
  label?: string;
  labelHelper?: string;
  placeholder?: string;
  control: any;
} & InputProps;

const FormInput = <T extends string>({
  name,
  label,
  labelHelper,
  placeholder,
  control,
  ...props
}: FormInputProps<T>) => {
  console.log({ control });

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="text-muted-foreground">{`${label}`}</FormLabel>
          )}
          {labelHelper && <span className="text-xs"> {labelHelper}</span>}
          <FormControl>
            <Input {...field} placeholder={placeholder} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

interface SkeletonProps extends React.HTMLAttributes<HTMLParagraphElement> {
  lable?: boolean;
}
FormInput.Skeleton = function FormInputSkeleton({
  className,
  lable,
  ...props
}: SkeletonProps) {
  return (
    <div className="s space-y-3">
      {lable && <Skeleton className="h-10 w-16 shrink-0 " />}
      <Skeleton className="h-10 w-full shrink-0 " />
    </div>
  );
};

export default FormInput;
