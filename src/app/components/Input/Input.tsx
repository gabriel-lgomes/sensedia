import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  label?: string;
  error?: string;
  helpText?: string;
};

export default function Input({
  label,
  error,
  helpText,
  className,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        className={`
          w-full py-2 px-4 mt-8 bg-[#F3F3F3] rounded-t border-b border-gray-75 focus:outline-0
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          } 
          ${className ?? ""}
        `}
        {...props}
      />
      {helpText && !error && (
        <p className="text-xs text-gray-500">{helpText}</p>
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
