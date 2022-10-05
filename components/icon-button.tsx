import { FC, MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface IconButtonProps {
  onClick?: MouseEventHandler;
  icon?: IconType;
}

export const IconButton: FC<IconButtonProps> = ({ onClick, icon: Icon }) => {
  return (
    <button onClick={onClick} className="btn">
      {Icon && <Icon />}
    </button>
  );
};
