import { FC } from "react";
interface SkillItemProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export const SkillItem: FC<SkillItemProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <li>
      <h1 className="font-bold">{title}</h1>
      <h2 className="italic">{subtitle}</h2>
      <h3>{description}</h3>
    </li>
  );
};
