"use client";
import classNames from "classnames";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primarySolid" | "secondarySolid";
  opacity?: "solid" | "semi";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = "md",
  variant = "primarySolid",
}) => {
  const variantClasses = {
    primarySolid: `bg-blue-400 hover:bg-blue-500`,
    secondarySolid: `bg-pink-500 hover:bg-pink-600`,
  };

  return (
    <button
      className={classNames(
        variantClasses[variant],
        `text-${size}`,
        `font-bold px-4 py-2 rounded-full backdrop-blur-xs transition-colors duration-300`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
