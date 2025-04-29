import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  typeButton?: "primary" | "secondary";
};

export default function Button({
  typeButton,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="submit"
      className={`mt-6 ${
        typeButton === "primary"
          ? "bg-primary-75 text-white"
          : "text-primary-75"
      } cursor-pointer px-8 py-2 rounded-[21px] hover:opacity-90`}
      {...props}
    >
      {children}
    </button>
  );
}
