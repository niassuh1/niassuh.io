import Image from "next/image";
import { FC } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

export const Me: FC = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/avatar.jfif"
        width={94}
        height={94}
        layout="intrinsic"
        alt="Profile pic"
        className="rounded-full"
      />
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold">Hussain Alzayer</h1>
        <h2 className="text-black/40 dark:text-white/40">@niassuh1</h2>
        <h3>
          <span className="text-black/40 dark:text-white/40">
            Web engineer at
          </span>{" "}
          <span className="font-bold">Axenda</span>
        </h3>
        <ul className="flex gap-3 text-lg">
          <AiFillGithub />
          <AiOutlineTwitter />
          <AiFillInstagram />
        </ul>
      </div>
    </div>
  );
};
