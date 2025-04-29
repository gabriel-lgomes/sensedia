import { ComponentProps } from "react";
import { BiCheck } from "react-icons/bi";

type CheckboxProps = ComponentProps<"input"> & {
  label?: string;
};

export default function Checkbox({
  label,
  className,
  ...props
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative w-5 h-5">
        <input type="checkbox" className="peer hidden" {...props} />
        <div
          className={`
            w-full h-full border-2 rounded-md border-gray-300
            transition-colors
            peer-checked:bg-primary-50 peer-checked:border-transparent
            flex items-center justify-center
            ${className ?? ""}
          `}
        >
          <BiCheck className="w-4 h-4 text-white peer-checked:block" />
        </div>
      </div>
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
}
