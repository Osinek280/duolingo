"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  src: string;
  href: string; 
};

export const SidebarItem = ({ label, src, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        {src.startsWith('/') ? (
          <Image
            src={src}
            alt={label}
            className="mr-5"
            height={32}
            width={32}
          />
        ) : (
          <p className="text-2xl flex items-center mr-5">{src}</p>
        )}
        {label}
      </Link>
    </Button>
  );
};
