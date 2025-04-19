import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { AlertCircle } from "lucide-react"; // Import an error icon

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" ;
}

const FormField = <T extends FieldValues,>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => { return (
  <Controller
    control ={control}
    name={name}
    render={({ field, fieldState }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <div className="relative flex items-center">
            <Input
              className={`input pr-10 ${
                fieldState.invalid ? "border-red-500" : ""
              }`}
              placeholder={placeholder}
              type={type}
              {...field}
            />
            {fieldState.invalid && (
              <div className="absolute right-3 text-red-500">
                <AlertCircle size={16} />
              </div>
            )}
          </div>
        </FormControl>
        {fieldState.error && (
          <FormMessage>
            {fieldState.error.message}
          </FormMessage>
        )}
      </FormItem>
    )}
  />
);}

export default FormField;