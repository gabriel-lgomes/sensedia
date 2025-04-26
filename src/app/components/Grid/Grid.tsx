import Image from "next/image";
import React from "react";

interface IGrid {
  image: string;
  title: string;
  description?: string;
}

export default function Grid({ image, title, description }: IGrid) {
  return (
    <div className="flex items-center gap-3">
      <Image src={image} alt={title} width={50} height={52} />
      <div className="grid gap-2">
        <p className="text-white text-base font-medium">{title}</p>
        <p className="text-white text-base font-light">{description}</p>
      </div>
    </div>
  );
}
