import { FC } from "react";
import { FaReact } from "react-icons/fa";

export const Header: FC = () => {
  return (
    <>
      <header className="border-b bg-white/70 dark:bg-black/70 backdrop-blur-xl z-50 dark:border-white/30 fixed top-0 w-full">
        <div className="flex items-center text-sm gap-2 p-3 w-fit bg-black/[5%] dark:bg-white/10 prose-hr:h-1">
          <FaReact className="text-blue-600" />
          <h1>index.tsx</h1>
        </div>
      </header>
    </>
  );
};
