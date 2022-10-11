import { FC, PropsWithChildren } from "react";

export const SkillList: FC<PropsWithChildren> = ({ children }) => {
  return <ul className="space-y-3">{children}</ul>;
};
