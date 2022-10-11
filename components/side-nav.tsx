import { FC } from "react";
import { NavButton } from "./nav-button";
import { RiHome2Line } from "react-icons/ri";
import { FiCode } from "react-icons/fi";
import { IconButton } from "./icon-button";
import { useTheme } from "next-themes";
import { HiOutlineSun } from "react-icons/hi";
import { BiMoon } from "react-icons/bi";

export const SideNav: FC = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="p-2 gap-2 flex flex-col border-r bg-white dark:bg-black border-r-black/20 dark:border-r-white/25 fixed top-0 h-screen z-[100]">
      <NavButton href="/" icon={RiHome2Line} />
      <NavButton href="/projects" icon={FiCode} />
      <div className="flex-1" />
      <IconButton
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        icon={theme == "light" ? BiMoon : HiOutlineSun}
      />
    </nav>
  );
};
