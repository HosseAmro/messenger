"use client";

import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";
import clsx from "clsx";

type Props = {
  label: string;
  id: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
};

export default function Input({
  label,
  id,
  type,
  disabled,
  required,
  errors,
  register,
}: Props) {
  return (
    <div>
      <label
        htmlFor={id}
        className=" block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          disabled={disabled}
          autoComplete={id}
          {...register(id, { required })}
          className={clsx(
            `form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
          placeholder:text-gray-400 ring-gray-300 ring-1 ring-inset focus:ring-sky-600
           focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
}
