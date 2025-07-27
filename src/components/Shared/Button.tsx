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
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = "md",
  variant = "primarySolid",
  disabled = false,
}) => {
  const variantClasses = {
    primarySolid: `bg-blue-400 hover:bg-blue-500`,
    secondarySolid: `bg-pink-400 hover:bg-pink-500`,
  };

  return (
    <button
      className={classNames(
        variantClasses[variant],
        `text-${size} text-white shadow-md`,
        `font-bold px-4 py-2 rounded-full backdrop-blur-xs transition-colors duration-300`,
        disabled
          ? `bg-gray-400 hover:bg-gray-400 cursor-not-allowed text-gray-600`
          : ``
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
