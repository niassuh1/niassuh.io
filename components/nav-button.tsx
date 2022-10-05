import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { IconType } from "react-icons/lib/esm/iconBase";

interface NavButtonProps {
  icon?: IconType;
  href: string;
}

export const NavButton: FC<NavButtonProps> = ({ href = "/", icon: Icon }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`btn ${
          router.asPath == href
            ? "text-black dark:text-white"
            : "text-black/40 dark:text-white/40"
        } `}
      >
        {Icon && <Icon />}
      </a>
    </Link>
  );
};
