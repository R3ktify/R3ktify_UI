import Button, { ButtonProps } from "@/shared/Button/Button";
import React from "react";

export interface ButtonDangerProps extends ButtonProps {}

const ButtonDanger: React.FC<ButtonDangerProps> = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonDanger disabled:bg-opacity-70 bg-red-500 hover:bg-primary-700 text-neutral-50 ${className}`}
      {...args}
    />
  );
};

export default ButtonDanger;
