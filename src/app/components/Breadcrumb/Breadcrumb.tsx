"use client";

import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const buildPath = (index: number) => {
    return "/" + pathSegments.slice(0, index + 1).join("/");
  };

  return (
    <div className="flex gap-2 items-center">
      <Link href="/" className="flex gap-2 items-center">
        <Image src="/sensedia.svg" alt="Sensedia Logo" width={27} height={27} />
        <h1 className="text-sm text-primary uppercase font-medium">
          Bem-vindo
        </h1>
      </Link>

      {pathSegments.map((segment, index) => (
        <div key={index} className="flex items-center gap-2">
          <FaCaretRight className="text-gray-25 text-xs" />
          <Link
            href={buildPath(index)}
            className="text-sm font-medium text-gray-75 capitalize"
          >
            {decodeURIComponent(segment)}
          </Link>
        </div>
      ))}
    </div>
  );
}
